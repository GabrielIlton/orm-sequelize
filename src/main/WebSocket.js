const { webSocketRepository, userRepository } = require('../infra/repositories');
const WebSocketService = require('../app/services/Socket/WebSocketService');
const DocumentConnections = require('../app/utils/DocumentConnections');
const TokenHelper = require('../app/helpers/TokenHelper');
const HashHelper = require('../app/helpers/HashHelper');
const Errors = require('../app/utils/HTTP/Errors');
const { Server } = require('socket.io');
const Http = require('http');

module.exports = App => {
  const webSocket = new Server(Http.createServer(App), { cors: { origins: ['*'] } });

  global.env.websocket = webSocket;

  const webSocketService = new WebSocketService({ webSocket });
  webSocketService.connectWebSocket();

  const nspUsers = webSocket.of('/users');

  nspUsers.use(async (socket, nextfunction) => {
    try {
      const authorization = socket.handshake.auth.token;
      if (!authorization) throw Errors.generic.notFound({ entity: 'token' }).errorMessage;

      const decodedToken = TokenHelper.verify({ tokenHash: authorization });
      if (decodedToken.error) throw Errors.generic.notFound({ entity: 'token' }).errorMessage;

      socket.emit('auth_success', decodedToken);

      nextfunction();
    } catch (error) {
      nextfunction(error);
    }
  });

  nspUsers.on('connection', (socket) => {
    socket.on('get_documents', async getDocuments => getDocuments(await webSocketRepository.find({ fieldsToReturn: ['name'] })));

    socket.on('create_document', async documentName => {
      const document = await webSocketRepository.findOne({ filters: { name: documentName }, fieldsToReturn: [''] });
      if (document) socket.emit('document_already_exists', documentName);
      else {
        await webSocketRepository.create({ name: documentName });
        nspUsers.emit('add_document_interface', documentName);
      }
    });

    socket.on('select_document', async ({ documentName, userName, userId }, returnText) => {
      const document = await webSocketRepository.findOne({ filters: { name: documentName }, fieldsToReturn: ['text'] });

      if (document) {
        socket.join(documentName);

        socket.data = { user_enter: true };

        const userAlreadyExistsInConnection = DocumentConnections.some(connection => connection.user_id === userId && connection.document_name === documentName);
        if (!userAlreadyExistsInConnection) DocumentConnections.push({ user_id: userId, user_name: userName, document_name: documentName });

        const connectionsByDocumentName = DocumentConnections.filter(documentConnection => documentConnection.document_name === documentName);
        const usersOnDocument = connectionsByDocumentName.map(connection => connection.user_name);

        // .to serve para atualizar o documento de quem entrar e de quem já está nele
        nspUsers.to(documentName).emit('users_on_document', usersOnDocument);

        returnText(document.text);
      } else await webSocketRepository.create({ name: documentName });

      socket.on('editor_text', async ({ message, documentName }) => {
        await webSocketRepository.update({ filters: { name: documentName }, modify: { text: message } });

        socket.to(documentName).emit('editor_text_client', message);
      });

      socket.on('delete_document', async documentName => {
        await webSocketRepository.delete({ filters: { name: documentName } });

        nspUsers.emit('delete_document_success', documentName);
      });

      socket.on('disconnect', () => {
        if (socket.data.user_enter) {
          const userToRemoveOfDocument = DocumentConnections.findIndex(connection => connection.user_id === userId && connection.document_name === documentName);
          if (userToRemoveOfDocument !== -1) DocumentConnections.splice(userToRemoveOfDocument, 1);
        }
      });
    });
  });

  webSocket.of('/').on('connection', socket => {
    socket.on('register_user', async (user, password) => {
      const userExists = await userRepository.findOne({ filters: { user }, fieldsToReturn: [''] });
      if (userExists) return webSocket.emit('register_user_error', Errors.generic.alreadyExists({ field: 'usuário' }).errorMessage);

      const passwordHash = HashHelper.generateSync({ text: password });
      await userRepository.create({ user, password: passwordHash });

      webSocket.emit('register_user_success', 'Usuário criado com sucesso.');
    });

    socket.on('login_user', async (user, password) => {
      const userExists = await userRepository.findOne({ filters: { user }, fieldsToReturn: ['password', 'user'] });
      if (!userExists) return webSocket.emit('user_not_exists', Errors.generic.notExists({ fieldKey: 'usuário' }).errorMessage);

      const isPasswordCorrect = await HashHelper.compare({ text: password, textHash: userExists.password });
      if (!isPasswordCorrect) return webSocket.emit('user_password_invalid', Errors.generic.invalidField({ fieldKey: 'Senha' }).errorMessage);

      const token = TokenHelper.generate({ payload: { user_id: userExists.id, user_name: userExists.user } });
      webSocket.emit('user_authenticated', token);
    });
  });
};

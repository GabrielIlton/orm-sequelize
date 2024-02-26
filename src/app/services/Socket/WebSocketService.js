const { SOCKET_PORT } = require('../../../config/Environments');

module.exports = class WebSocketService {
  #webSocket;
  constructor ({ webSocket }) { this.#webSocket = webSocket; }

  sendMessage ({ socketKeyRoom, message }) {
    return this.#webSocket.emit(socketKeyRoom, message);
  }

  connectWebSocket () {
    return this.#webSocket.listen(SOCKET_PORT);
  }
};

/* eslint-disable no-undef */
import { alertAndRedirect, updateEditorText, authSuccess, updateInterfaceConnectedUsersInDocument } from './documento.js';
import { getCookie } from '../utils/cookies.js';

const socket = io('http://localhost:3030/users', { auth: { token: getCookie('token') } });

socket.on('auth_success', decodedToken => authSuccess({ userName: decodedToken.user_name, userId: decodedToken.user_id }));

socket.on('connect_error', error => {
  alert(error);
  window.location.href = '../login/index.html';
});

function selectDocument ({ documentName, userName, userId }) {
  socket.emit('select_document', ({ documentName, userName, userId }), text => updateEditorText(text));
}

function sendMessage ({ message, documentName }) {
  socket.emit('editor_text', { message, documentName });
}

function deleteDocument (documentName) {
  socket.emit('delete_document', documentName);
}

socket.on('editor_text_client', text => updateEditorText(text));

socket.on('delete_document_success', documentName => alertAndRedirect(documentName));

socket.on('users_on_document', usersOnDocument => updateInterfaceConnectedUsersInDocument(usersOnDocument));

export { sendMessage, selectDocument, deleteDocument };

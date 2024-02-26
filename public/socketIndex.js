/* eslint-disable no-undef */
import { createLinkInDocument, removeLinkInDocument } from './index.js';
import { getCookie } from './utils/cookies.js';

const socket = io('http://localhost:3030/users', {
  auth: { token: getCookie('token') }
});

socket.on('connect_error', error => {
  alert(error);
  window.location.href = './login/index.html';
});

socket.emit('get_documents', documents => documents.forEach(document => createLinkInDocument(document.name)));

function createDocument (documentName) {
  socket.emit('create_document', documentName);
}

socket.on('add_document_interface', documentName => createLinkInDocument(documentName));

socket.on('document_already_exists', documentName => alert(`O documento ${documentName} já existe.`));

socket.on('delete_document_success', documentName => removeLinkInDocument(documentName));

export { createDocument };

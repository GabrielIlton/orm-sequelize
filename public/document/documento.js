/* eslint-disable no-undef */
import { sendMessage, selectDocument, deleteDocument } from './socketDocument.js';

const parameters = new URLSearchParams(window.location.search);
const documentName = parameters.get('nome');

const editorText = document.getElementById('editor-texto');
const documentTitle = document.getElementById('titulo-documento');
const buttonDeleteDocument = document.getElementById('excluir-documento');
const listUsers = document.getElementById('usuarios-conectados');

documentTitle.textContent = documentName || 'Documento sem tíulo.';

function authSuccess ({ userName, userId }) {
  selectDocument({ documentName, userName, userId });
}

editorText.addEventListener('keyup', () => sendMessage({ message: editorText.value, documentName }));

function updateEditorText (text) {
  editorText.value = text;
}

buttonDeleteDocument.addEventListener('click', () => deleteDocument(documentName));

function alertAndRedirect (name) {
  if (name === documentName) {
    alert(`Documento ${name} deletado!`);
    window.location.href = '/view';
  }
}

function updateInterfaceConnectedUsersInDocument (usersOnDocument) {
  listUsers.innerHTML = '';

  usersOnDocument.forEach(userOnDocument => { listUsers.innerHTML += `<li class="list-group-item">${userOnDocument}</li>`; });
}

export { updateEditorText, alertAndRedirect, authSuccess, updateInterfaceConnectedUsersInDocument };

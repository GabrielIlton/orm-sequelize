/* eslint-disable no-undef */
import { createDocument } from './socketIndex.js';
import { removeCookie } from './utils/cookies.js';

const documentList = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const inputDocument = document.getElementById('input-documento');
const buttonLogout = document.getElementById('botao-logout');

buttonLogout.addEventListener('click', () => {
  removeCookie('token');

  alert('Usuário deslogado.');

  window.location.href = './login/index.html';
});

form.addEventListener('submit', event => {
  event.preventDefault();
  createDocument(inputDocument.value);
  inputDocument.value = '';
});

function createLinkInDocument (documentName) {
  documentList.innerHTML += `
        <a href="./document/index.html?nome=${documentName}" class="list-group-item list-group-item-action" id="documento-${documentName}">
            ${documentName}
        </a>
    `;
}

function removeLinkInDocument (documentName) {
  const documentInList = document.getElementById(`documento-${documentName}`);

  documentList.removeChild(documentInList);
}

export { createLinkInDocument, removeLinkInDocument };

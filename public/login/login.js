import { loginUser } from './socketLogin.js';

const form = document.getElementById('form-login');

form.addEventListener('submit', event => {
  event.preventDefault();

  const user = form['input-usuario'].value;
  const password = form['input-senha'].value;

  loginUser({ user, password });
});

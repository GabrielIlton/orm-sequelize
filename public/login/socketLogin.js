/* eslint-disable no-undef */
import { defineCookies } from '../utils/cookies.js';

const socket = io('http://localhost:3030');

function loginUser ({ user, password }) {
  socket.emit('login_user', user, password);
}

socket.on('user_not_exists', error => alert(error));

socket.on('user_password_invalid', error => alert(error));

socket.on('user_authenticated', token => {
  defineCookies('token', token);

  window.location.href = '/view';
});

export { loginUser };

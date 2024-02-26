/* eslint-disable no-undef */
const socket = io('http://localhost:3030');

function registerUser ({ user, password }) {
  socket.emit('register_user', user, password);
}

socket.on('register_user_error', errorMessage => alert(errorMessage));

socket.on('register_user_success', errorMessage => alert(errorMessage));

export { registerUser };

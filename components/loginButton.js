import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <div id="login-page">
    <h1>Welcome to vocab-YOU-lary</h1>
    <button id="google-auth" class="btn btn-danger">LOGIN</button>
  </div>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

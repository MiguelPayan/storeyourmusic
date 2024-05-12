import React from 'react';
import GoogleSignInScript from '../googleSignIn';

function Login() {
  return (
    <div>
      <h1>Bienvenido a StoreYourMusic</h1>

      {/* start login form */}
      <form id="loginform" action="#">
        <h1>LOG IN</h1>
        <p><a href="index.html" target="_blank"> storeyourmusic.store</a></p>

        <div className="input-info">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="User-Name" />
          <i className="fa fa-envelope"></i>
          <input type="email" placeholder="E-mail" required autoComplete="off" />
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Password" />
          <input type="checkbox" />
          <span>Remember Me</span><br />
        </div>

        <div className="log-sign">
          <button className="login" form="loginform">
            <i className="fa fa-mail-forward (alias)"></i> Log In
          </button>
          <a href="#" target="_blank">
            <button className="signup" form="signupform">
              <i className="fa fa-plus"></i> Sign Up
            </button>
          </a>
        </div>

        {/* Este es el contenedor donde se mostrará el botón de inicio de sesión de Google */}
        <div id="buttonDiv" className="social-media">
          {/* Aquí se renderizará el botón de inicio de sesión de Google */}
        </div>

        
      {/* Renderiza el componente GoogleSignInScript donde quieras que aparezca el botón de inicio de sesión de Google */}
      <GoogleSignInScript />

        <p className="forget-password">
          If you forget your password please <a href="#">click here</a>
        </p>
      </form>
      {/* End login form */}
    </div>
  );
}

export default Login;

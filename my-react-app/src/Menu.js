import React from 'react';
import '../../web/css/Style.css';

function Menu() {
  return (
    <div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <img src="my-react-app\web\images\nav icon.png" alt="Icono de menú" />
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Canciones</a></li>
          <li><a href="#" id="cerrar_sesion">Cerrar Sesión</a></li>
          <li><a href="#" id="usuarios">Usuarios Registrados</a></li>
          <li><a href="login" className="btn-login">Iniciar Sesión</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
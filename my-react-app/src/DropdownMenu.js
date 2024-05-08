import React, { useState } from 'react';
import 'my-react-app\src\styles\css\Style.css';

function DropdownMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <input type="checkbox" id="active" checked={isActive} onChange={toggleMenu} />
      <label htmlFor="active" className="menu-btn">
        <img src="my-react-app\web\images\nav icon.png" alt="Icono de menú" />
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Canciones</a></li>
          <li><a href="#" id="cerrar_sesion">Cerrar Sesion</a></li>
          <li><a href="#" id="usuarios">Usuarios Registrados</a></li>
          <li><a href="login.html" className="btn-login">Iniciar Sesión</a></li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;

// Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import images from '../importImages';


function Header() {
  const [credenciales, setCredenciales] = useState(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const credenciales = parseJwt(token);
        setCredenciales(credenciales);
      } catch (error) {
        console.error('Error al parsear el token:', error);
      }
    }
  }, []);

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error al parsear el token JWT:', error);
      return null;
    }
  };

  useEffect(() => {
    if (credenciales && credenciales.email === "thegigaboss57@gmail.com") {
      // Si el usuario tiene el correo electrónico correcto, mostramos el botón de usuarios registrados
    }
  }, [credenciales]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setCredenciales(null);
    window.location.reload(); // Este es un enfoque simplificado, puedes implementar una navegación más adecuada con React Router
  };


  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleUsuariosClick = (event) => {
    event.preventDefault();
    console.log('Enlace clickeado');

    if (credenciales && credenciales.email === "thegigaboss57@gmail.com") {
      alert("Inicia sesión con la cuenta de administrador");
    } else {
      alert("Inicia sesión con la cuenta de administrador");
    }
  };

  return (
    <header className="header">
      <input type="checkbox" id="active" checked={menuOpen} onChange={handleMenuClick}/>
      <label htmlFor="active" className="menu-btn">
        <img src={images['nav icon.png']}  alt="Icono de menú" />
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
        <li><Link to="/" onClick={handleMenuItemClick}>Inicio</Link></li>
          <li><a href="#">Canciones</a></li>
          <li><a href="#" id="cerrar_sesion">Cerrar Sesion</a></li>
          <li><Link to="/login" onClick={handleMenuItemClick}>Iniciar Sesión</Link></li>
        </ul>
      </div>
      <div className="header-content container">
        <div className="header-txt">
          <h1>Explora la Música</h1>
          <p>Descubre nuevas canciones y artistas para disfrutar.</p>
          <a href="#" className="btn-1">Más Información</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

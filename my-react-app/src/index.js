import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './ruta/a/menu'; // Asegúrate de proporcionar la ruta correcta al componente Menu
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu /> {/* Renderiza el componente Menu */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Renderiza en el contenedor con el ID "root" en index.html
);

reportWebVitals();

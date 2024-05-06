import React from 'react';
import ReactDOM from 'react-dom';
import 'my-react-app\src\styles\css\Style.css';
import App from 'my-react-app\src\App.js';
import Menu from 'my-react-app\src\Menu.js'; // Asegúrate de proporcionar la ruta correcta al componente Menu
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu /> {/* Renderiza el componente Menu */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Renderiza en el contenedor con el ID "root" en index.html
);

reportWebVitals();

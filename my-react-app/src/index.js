import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // En lugar de document.getElementById('root'), simplemente pasamos null
  // ya que el elemento 'root' se maneja automáticamente en el archivo index.html en la carpeta public
  document.getElementById('root')
);

// Si deseas medir el rendimiento en tu aplicación, puedes dejar esta parte.
reportWebVitals();

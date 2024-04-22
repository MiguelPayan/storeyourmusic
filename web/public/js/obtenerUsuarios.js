//const { rejects } = require("assert");


const container = document.querySelector(".container");

function eliminar(boton){
    // Obtener el elemento padre (el <li>) del botón clicado
  let liElemento = boton.parentNode;

  // Obtener el contenido del <li>
  let contenido = liElemento.textContent.trim(); // Eliminar espacios en blanco al inicio y final

  // Guardar el contenido en la variable
  const textoDividido = contenido.split('✉️');
  const correo = textoDividido[0];
  // Mostrar el contenido guardado (solo para demostración)
  console.log(correo);
}

fetch('https://backstoreyourmusic.onrender.com/usuarios')
.then((response) => response.json())
.then((users)=>{
    let ptl = users.map(user => `<li>${user.email} ✉️ ${user.name} <button onclick="eliminar(this)">Eliminar</button></li>`);
    ptl = ptl.join('');
    container.innerHTML = `<ul>${ptl}</ul>`;
    
})
.catch((error)=>{
console.log(error)
})


console.log('FIN')

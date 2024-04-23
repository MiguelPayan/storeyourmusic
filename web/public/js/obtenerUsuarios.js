//const { rejects } = require("assert");


const container = document.querySelector(".container");

async function eliminar(boton){
    // Obtener el elemento padre (el <li>) del botón clicado
  let liElemento = boton.parentNode;

  // Obtener el contenido del <li>
  let contenido = liElemento.textContent.trim(); // Eliminar espacios en blanco al inicio y final

  // Guardar el contenido en la variable
  const textoDividido = contenido.split('✉️');
  const correo = textoDividido[0];
  // Mostrar el contenido guardado (solo para demostración)
  console.log(correo);

  try {
    const response = await fetch('https://backstoreyourmusic.onrender.com/eliminaruser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'
      },
      body: JSON.stringify({ email: correo })
    });

    if (response.ok) {
      console.log("Usuario eliminado correctamente");
    } else {
      console.error("Error al eliminar usuario");
    }
  } catch (error) {
    console.error("Error de red:", error);
  }

}
let headers = new Headers();
headers.append('Access-Control-Allow-Origin', 'http://localhost:5500');
headers.append('Access-Control-Allow-Credentials', 'true');

fetch('https://backstoreyourmusic.onrender.com/usuarios', {headers: headers})
.then((response) =>response.json())
.then((users)=>{
    let ptl = users.map(user => `<li>${user.email} ✉️ ${user.name} <button onclick="eliminar(this)">Eliminar</button></li>`);
    ptl = ptl.join('');
    container.innerHTML = `<ul>${ptl}</ul>`;
    
})
.catch((error)=>{
console.log(error)
})


console.log('FIN')

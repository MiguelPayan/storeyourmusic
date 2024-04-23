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
  location.reload()
}


fetch('https://backstoreyourmusic.onrender.com/usuarios')
.then((response) =>response.json())
.then((users)=>{
  let userListHTML = '';
  users.forEach(user => {
    userListHTML += `
      <li>
        <img src="${user.imageUrl}" alt="${user.name}" style="width: 50px; height: 50px;"> <!-- Ajusta el tamaño de la imagen según sea necesario -->
        <span>${user.email}</span> <!-- Coloca el correo electrónico después de la imagen -->
        <button onclick="eliminar(this)">Eliminar</button>
      </li>`;
  });
  container.innerHTML = `<ul>${userListHTML}</ul>`;
})
.catch((error)=>{
  console.log(error)
})

console.log('FIN')

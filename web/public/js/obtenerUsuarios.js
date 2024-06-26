//const { rejects } = require("assert");


const container = document.querySelector(".container");

const style = document.createElement('style');
style.textContent = `
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    min-height: 100vh;
  }
  .list {
    position: relative;
  }
  .list h2 {
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  .list ul {
    position: relative;
  }
  .list ul li {
    position: relative;
    left: 0;
    color: #fce4ec;
    list-style: none;
    margin: 4px 0;
    border-left: 2px solid #f50057;
    transition: 0.5s;
    cursor: pointer;
    display: flex; /* New: Make li items flex containers */
    align-items: center; /* New: Align items vertically */
  }

  .list ul li:hover {
    left: 10px;
    z-index: 1;
  }
  .list ul li span {
    position: relative;
    padding: 8px;
    padding-left: 12px;
    display: inline-block;
    z-index: 1;
    transition: 0.5s;
  }
  .list ul li:hover span {
    color: #111;
  }
  .list ul li:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.5s;
  }
  .list ul li:hover:before {
    transform: scaleX(1);
  }
  
  .list button {
    background-color: #f44336; 
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 0.4s;
    z-index: 2;
  }
  .list .user-info {
    flex: 1; /* New: Take remaining space */
    display: flex; /* New: Make flex container */
    align-items: center; /* New: Align items vertically */
  }
  
  
    .list button:hover {
    background: #ff00ff; 
  }
`;

document.head.appendChild(style);
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
  let ptl = users.map(user => `<li>
  <div class="user-info">
    <span>${user.email} ✉️ ${user.name}</span>
  </div>
  <button onclick="eliminar(this)">Eliminar</button>
</li>`
);
ptl = ptl.join('');
container.innerHTML = `<div class="list"><ul>${ptl}</ul></div>`;
    
})
.catch((error)=>{
console.log(error)
})


console.log('FIN')
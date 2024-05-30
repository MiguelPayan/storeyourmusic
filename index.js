let credenciales = sessionStorage.getItem("token");
let btn_usuarios = document.getElementById("usuarios");

function parseJwt(token) {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.log(e);
    }
}

if (credenciales == null) {
    let btn_cerrar_sesion = document.getElementById("cerrar_sesion");
    btn_cerrar_sesion.style.display = "none";

    let miPerfil = document.getElementById("mi_perfil");
    miPerfil.style.display = "none";
} else {
    let btn_cerrar_sesion = document.getElementById("cerrar_sesion");
    btn_cerrar_sesion.style.display = "inline-block";
    btn_cerrar_sesion.onclick = function cerrarSesion() {
        sessionStorage.removeItem("token");
        credenciales = null;
        location.reload();
    };
}

try {
    credenciales = parseJwt(credenciales);
    const imagenPerfil = document.createElement("img");
    imagenPerfil.src = credenciales.picture;
    imagenPerfil.className = "imagenPerfil";
    console.log(`Imagen de perfil en: ${credenciales.picture}`);
    
    const loginButton = document.querySelector(".btn-login");
    loginButton.textContent = `Sesión iniciada como ${credenciales.name}`;
    loginButton.appendChild(imagenPerfil);
} catch (e) {
    console.log(e);
}

btn_usuarios.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Enlace clickeado');

    if (credenciales == null) {
        alert("Inicia sesión con la cuenta de administrador");
    }
    return true;
});

try {
    if (credenciales.email != null && "thegigaboss57@gmail.com" == credenciales.email) {
        console.log("hola");
        
        btn_usuarios.onclick = function usuariosRegistrados() {
            window.location = ("/web/public/html/usuarios.html");
        }
    } else {
        btn_usuarios.style.display = "none";
    }
} catch (e) {
    console.log(e);
}

//Obtener artistas con mas reproducciones
async function artistastop(){
    try{
        const artistastop = await fetch('https://backstoreyourmusic.onrender.com/artistastop',{method: 'GET'});
        let top3 = await artistastop.json();
        
        const artista1 = document.getElementById("artista-1");
        const artista2 = document.getElementById("artista-2");
        const artista3 = document.getElementById("artista-3");
        artista1.textContent = top3[0].nombre;
        artista2.textContent = top3[1].nombre;
        artista3.textContent = top3[2].nombre;
    }catch(error){
        console.error(error);
    }
}
artistastop();

//Obtener canciones con mas reproducciones

async function musicatop(){
    try{
        const musicatop = await fetch('https://backstoreyourmusic.onrender.com/musicatop',{method: 'GET'});
        let top4 = await musicatop.json();
        console.log(top4);
        const cancion1 = document.getElementById("cancion-1");
        const cancion2 = document.getElementById("cancion-2");
        const cancion3 = document.getElementById("cancion-3");
        const cancion4 = document.getElementById("cancion-4");
        cancion2.textContent = top4[1].titulo;
        cancion1.textContent = top4[0].titulo;
        cancion3.textContent = top4[2].titulo;
        cancion4.textContent = top4[3].titulo;

        const visitasCancion1 = document.getElementById("visitas-cancion-1");
        const visitasCancion2 = document.getElementById("visitas-cancion-2");
        const visitasCancion3 = document.getElementById("visitas-cancion-3");
        const visitasCancion4 = document.getElementById("visitas-cancion-4");

        visitasCancion1.textContent = "Visitas: " + top4[0].visitas;
        visitasCancion2.textContent = "Visitas: " + top4[1].visitas;
        visitasCancion3.textContent = "Visitas: " + top4[2].visitas;
        visitasCancion4.textContent = "Visitas: " + top4[3].visitas;
    }catch(error){
        console.error(error);
    }
}
musicatop();

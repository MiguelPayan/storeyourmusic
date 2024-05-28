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

let credenciales = sessionStorage.getItem("token");
console.log('Importado desde ./index.js');
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

credenciales = parseJwt(credenciales);
console.log(credenciales);
const imagenPerfil = document.createElement("img")
imagenPerfil.src=credenciales.picture;
imagenPerfil.className="imagenPerfil";
console.log(`Imagen de perfil en: ${credenciales.picture}`)
const loginButton = document.querySelector(".btn-login");

loginButton.textContent=`Sesion iniciada como ${credenciales.name}`;
loginButton.appendChild(imagenPerfil);

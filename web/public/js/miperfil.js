let credenciales = sessionStorage.getItem("token");

let valorNombre, valorCorreo;

function parseJwt (token) {
    try{
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }catch(e){console.log(e)}
}

credenciales = parseJwt(credenciales);

console.log(credenciales)

nombre = document.getElementsByClassName("valor")[0];
correo = document.getElementsByClassName("valor")[1];
console.log(correo)
nombre_header = document.getElementById("nombre-header");

valorNombre =credenciales.name;
valorCorreo = credenciales.email;

nombre_header.textContent = valorNombre; 
nombre.textContent = valorNombre;
correo.textContent = valorCorreo;


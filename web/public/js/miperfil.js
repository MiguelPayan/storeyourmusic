try{
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
    
    playButton = document.getElementsByClassName("play")[0];
    pauseButton = document.getElementsByClassName("pause")[0];
    nombre = document.getElementsByClassName("valor")[0];
    correo = document.getElementsByClassName("valor")[1];
    console.log(correo)
    nombre_header = document.getElementById("nombre-header");
    
    valorNombre =credenciales.name;
    valorCorreo = credenciales.email;
    
    nombre_header.textContent = valorNombre; 
    nombre.textContent = valorNombre;
    correo.textContent = valorCorreo;
}catch(error){
    console.log("Error con la sesion");
    console.log(error);
}



// Obtener el elemento de audio
let miAudio = document.getElementById('mi_audio');


function play(){
    miAudio.play();
}
function pause(){
    miAudio.pause();
}


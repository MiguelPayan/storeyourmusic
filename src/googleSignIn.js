/* global google */

import React, { useEffect } from 'react';

function GoogleSignInScript() {
  useEffect(() => {
    function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      
      const respuestaLogin = parseJwt(response.credential);
      console.log(respuestaLogin.picture);
    
      let informaciongoogle = {
        email : respuestaLogin.email,
        picture: respuestaLogin.picture,
        name : respuestaLogin.name,
        familyname : respuestaLogin.family_name
      }
    
      let informaciongoogleJson = JSON.stringify(informaciongoogle);
      console.log(informaciongoogleJson);
      fetch('https://backstoreyourmusic.onrender.com/', {
        method : 'Post',
        body: informaciongoogleJson,
        headers: new Headers ({
          'Content-Type' : 'application/json'
        })
      });
    
      if(response.credential){
        // Almacena el token en el localStorage
        localStorage.setItem("token", response.credential);
        
        // Redirige al usuario a la página de inicio
        // Aquí debes manejar la navegación en función de tu enrutador o componente de navegación
        // Por ejemplo, podrías utilizar history.push("/ruta") o navigation.navigate("/ruta")
        // Asegúrate de que navigation esté disponible en este contexto
        // navigation.push("/"); // Cambia la ruta a la página de inicio de tu aplicación
      }
    }

    function parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    
      return JSON.parse(jsonPayload);
    }

    // Inicialización del script de Google Sign-In
    const initGoogleSignIn = () => {
      google.accounts.id.initialize({
        client_id: "79690564618-bsocagfogtft885mn65mvb67g9qt0ef0.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    };

    initGoogleSignIn(); // Llama a la función de inicialización cuando el componente se monta

    // Limpieza del efecto para evitar fugas de memoria
    return () => {
      // Aquí puedes realizar cualquier limpieza necesaria, como eliminar eventos o suscripciones
    };
  }, []);

  return (
    <div id="buttonDiv">
      {/* Este componente no tiene representación visual, ya que solo contiene lógica de JavaScript */}
    </div>
  );
}

export default GoogleSignInScript;

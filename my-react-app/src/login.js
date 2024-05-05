src="accounts.google.com/gsi/client";
//const { jwtDecode } = require('../node_modules/jwt-decode/build/cjs/index.js');


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
    sessionStorage.setItem("token",response.credential);
    document.location.href = "index.html"
  }
  }

  

  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "79690564618-bsocagfogtft885mn65mvb67g9qt0ef0.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


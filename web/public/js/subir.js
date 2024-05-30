let valorNombre, valorCorreo;

try{
    let credenciales = sessionStorage.getItem("token");
    
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
    
    valorNombre =credenciales.name;
    valorCorreo = credenciales.email;
}catch(error){
    console.log(error)
}

document.getElementById('subir-cancion-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('cancion');
    const file = fileInput.files[0];

    if (!file) {
        alert('Por favor, selecciona un archivo primero');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    //Subir cancion a azure
     try {
        const response = await fetch('https://backstoreyourmusic.onrender.com/upload', {
            method: 'POST',
            body: formData
        });

        const responseText = await response.text();

        if (response.ok) {
            alert("Subida a Azure");
        } else {
            alert('Error al subir a Azure: ' + responseText);
        }
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        alert('Error al mandar cancion al back');
    }

    let titulo = await file.name;
    console.log(titulo)
    //Conseguir los datos para subir la cancion a MySQL
    let values = {
       "email" : valorCorreo,
       "titulo" : titulo
   }
   values = JSON.stringify(values);
   //Enviar datos al back para obtener idUsuario y enlace
    try{
        const response = await fetch('https://backstoreyourmusic.onrender.com/uploadsql', {
            method: 'POST',
            body: values,
            headers: new Headers ({
                'Content-Type' : 'application/json'
              })
        });

        const responseText = await response.text();

        if (response.ok) {
            alert("Subida a SQL");
            window.location.reload(); // Recargar la página después de la subida exitosa
        } else {
            alert('Error al subir el archivo a SQL: ' + responseText);
        }
    }catch(error){
        console.log('Error al hacer mandar informacion sql al backend')
        console.log(error);
    }
});

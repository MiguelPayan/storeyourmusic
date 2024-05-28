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

    try {
        const response = await fetch('https://backstoreyourmusic.onrender.com/upload', {
            method: 'POST',
            body: formData
        });

        const responseText = await response.text();

        if (response.ok) {
            alert(responseText);
            window.location.reload(); // Recargar la página después de la subida exitosa
        } else {
            alert('Error al subir el archivo: ' + responseText);
        }
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        alert('Error al subir el archivo');
    }
});

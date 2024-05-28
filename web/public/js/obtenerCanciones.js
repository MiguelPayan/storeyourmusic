async function obtenerCanciones() {
    try {
        let response = await fetch('https://backstoreyourmusic.onrender.com/songs', {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Error al obtener las canciones');
        }

        let canciones = await response.json();

        canciones.forEach((cancion, index) => {
            const contenedor = document.getElementById("contenedor-canciones");

            const rola = document.createElement("div");
            rola.className = "contenedor-unacancion";

            const nombre = document.createElement("p");
            nombre.className = "nombre-cancion";
            nombre.textContent = cancion;

            rola.onclick = () => {
                const audioGlobal = document.getElementById("audio-global");
                const audioSource = document.getElementById("audio-source");
                audioSource.src = `https://storeyourmusic01.blob.core.windows.net/cloudc/${cancion}`;
                audioGlobal.load();
                audioGlobal.play();
            };

            rola.appendChild(nombre);
            contenedor.appendChild(rola);
        });
    } catch (e) {
        console.error(e);
    }
}

obtenerCanciones();

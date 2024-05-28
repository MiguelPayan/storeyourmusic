async function obtenerCanciones() {
    try {
        let response = await fetch('https://backstoreyourmusic.onrender.com/mostrarcanciones', {
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

            const audio = document.createElement("audio");
            audio.src = `https://backstoreyourmusic.onrender.com/canciones/${cancion}`;
            audio.id = `audio${index}`;

            const controlButtons = document.createElement("div");
            controlButtons.className = "control-buttons";

            const playButton = document.createElement("button");
            playButton.textContent = "Play";
            playButton.onclick = () => audio.play();

            const pauseButton = document.createElement("button");
            pauseButton.textContent = "Pause";
            pauseButton.onclick = () => audio.pause();

            const forwardButton = document.createElement("button");
            forwardButton.textContent = ">>";
            forwardButton.onclick = () => audio.currentTime += 10;

            const rewindButton = document.createElement("button");
            rewindButton.textContent = "<<";
            rewindButton.onclick = () => audio.currentTime -= 10;

            const volumeSlider = document.createElement("input");
            volumeSlider.type = "range";
            volumeSlider.min = 0;
            volumeSlider.max = 1;
            volumeSlider.step = 0.1;
            volumeSlider.value = audio.volume;
            volumeSlider.oninput = () => audio.volume = volumeSlider.value;

            const timeDisplay = document.createElement("div");
            timeDisplay.className = "time-display";

            audio.ontimeupdate = () => {
                const minutes = Math.floor(audio.currentTime / 60);
                const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
                timeDisplay.textContent = `${minutes}:${seconds}`;
            };

            controlButtons.appendChild(playButton);
            controlButtons.appendChild(pauseButton);
            controlButtons.appendChild(rewindButton);
            controlButtons.appendChild(forwardButton);
            controlButtons.appendChild(volumeSlider);
            controlButtons.appendChild(timeDisplay);

            rola.appendChild(nombre);
            rola.appendChild(audio);
            rola.appendChild(controlButtons);

            contenedor.appendChild(rola);
        });
    } catch (e) {
        console.error(e);
    }
}

obtenerCanciones();

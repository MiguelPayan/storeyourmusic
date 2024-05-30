async function obtenerCanciones() {
    try {
        let response = await fetch('https://backstoreyourmusic.onrender.com/getcanciones', {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Error al obtener las canciones');
        }

        //let objeto = await response.json()
        //console.log(objeto[0].titulo)
        let canciones = await response.json();

        canciones.forEach((cancion, index) => {
            const contenedor = document.getElementById("contenedor-canciones");

            const rola = document.createElement("div");
            rola.className = "contenedor-unacancion";

            const nombre = document.createElement("p");
            nombre.className = "nombre-cancion";
            nombre.textContent = cancion.titulo;

            const contenedor_visitas = document.createElement("div");
            const label_visitas = document.createElement("p");
            const visitas = document.createElement("p");
            visitas.textContent = cancion.visitas
            label_visitas.textContent = "  Visitas:   "

            contenedor_visitas.appendChild(label_visitas);
            contenedor_visitas.appendChild(visitas);

            rola.onclick = async () => {
                const audioGlobal = document.getElementById("audio-global");
                const audioSource = document.getElementById("audio-source");
                await fetch('https://backstoreyourmusic.onrender.com/visita', {
                    method: 'POST',
                    body: JSON.stringify({"idcancion" : cancion.idcanciones}),
                    headers: new Headers ({
                        'Content-Type' : 'application/json'
                      })
                })

                let url = await limpiarURL(`https://storeyourmusic01.blob.core.windows.net/cloudc/${cancion.titulo}`);
                audioSource.src = url;
                audioGlobal.load();
                audioGlobal.play();
            };

            rola.appendChild(nombre);
            rola.appendChild(contenedor_visitas)
            contenedor.appendChild(rola);
            
        });
    } catch (e) {
        console.error(e);
    }
}

function limpiarURL(link){
    // Texto en UTF-8
    const textoUtf8 = link;

    // Usar TextEncoder para codificar en UTF-8
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(textoUtf8);

    // Crear una instancia de TextDecoder para ISO 8859-1
    const iso88591Decoder = new TextDecoder('iso-8859-1');

    // Decodificar los bytes UTF-8 como ISO 8859-1
    const textoIso88591 = iso88591Decoder.decode(utf8Bytes);
    console.log(textoIso88591)
    return textoIso88591;

}
               
obtenerCanciones();

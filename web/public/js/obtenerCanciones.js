async function obtenerCanciones(){
    
    try {
        let response = await fetch('https://backstoreyourmusic.onrender.com/mostrarcanciones',
            {
                method: 'GET'
            }
        ).then((response) =>response.json())
        .then((canciones)=>{
            canciones.map((cancion,index)=>{
                console.log(cancion)
                const contenedor = document.getElementById("contenedor-canciones")
                //crear el div donde ira el titulo y los botones
                const rola = document.createElement("div");
                rola.className = "contenedor-unacancion";
                //p donde ira el nombre
                const nombre = document.createElement("p");
                nombre.className = "nombre-cancion";
                nombre.textContent = cancion
                //audio
                const audio = document.createElement("audio");
                audio.src = `https://backstoreyourmusic.onrender.com/canciones/${cancion}`;
                audio.id = `audio${index}`
                //button play
                const play = document.createElement("button");
                play.textContent = "play"
                
                play.onclick = ()=>{
                    // Obtener el elemento de audio
                    let miAudio = document.getElementById(`audio${index}`);


                    function play(){
                        miAudio.play();
                    }
                    play();
                
                }

                //boton pause
                const pause = document.createElement("button");
                pause.textContent = "Pausa"
                pause.onclick = ()=>{
                    // Obtener el elemento de audio
                    let miAudio = document.getElementById(`audio${index}`);


                    function pause(){
                        miAudio.pause();
                    }
                    pause();
                
                }
                contenedor.appendChild(rola)
                rola.appendChild(nombre)
                rola.appendChild(audio)
                rola.appendChild(play)
                rola.appendChild(pause)
            }
            )
        })
        if(response){
            
            console.log('Hay respuesta')
            console.log(response)
        }
    }catch(e){
        console.error(e);
    }
}

obtenerCanciones();

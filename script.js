function abrirZoom(elemento) {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const textoModal = document.getElementById("nombreAlumnoZoom");
    
    // 1. Aseguramos que se vea la imagen y se oculte el video (si existiera)
    imgModal.style.display = "block";
    const videoExistente = document.getElementById("videoPlayer");
    if (videoExistente) videoExistente.style.display = "none";

    // 2. Obtenemos los datos de la tarjeta clicada
    const rutaImagen = elemento.querySelector("img").src;
    const nombreAlumno = elemento.querySelector("strong").innerText;
    const tituloTrabajo = elemento.querySelector("h3").innerText;
    
    // 3. Asignamos los datos al modal
    modal.style.display = "block";
    imgModal.src = rutaImagen;
    textoModal.innerText = tituloTrabajo + " - Por: " + nombreAlumno;
}

function abrirVideo(url, titulo, autor) {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const textoModal = document.getElementById("nombreAlumnoZoom");

    // 1. Ocultamos la imagen para mostrar el video
    imgModal.style.display = "none";
    
    // 2. Creamos o actualizamos el reproductor de YouTube
    let videoExistente = document.getElementById("videoPlayer");
    if (!videoExistente) {
        videoExistente = document.createElement("iframe");
        videoExistente.id = "videoPlayer";
        videoExistente.className = "video-grande";
        // Insertamos el video antes del texto del alumno
        modal.insertBefore(videoExistente, textoModal);
    }
    
    videoExistente.style.display = "inline-block";
    videoExistente.src = url + "?autoplay=1"; 
    
    modal.style.display = "block";
    textoModal.innerText = titulo + " - Por: " + autor;
}

function abrirVideoLocal(elemento) {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const textoModal = document.getElementById("nombreAlumnoZoom");
    
    // Ocultamos la imagen
    imgModal.style.display = "none";

    // Obtenemos la ruta del video y textos
    const rutaVideo = elemento.querySelector("source").src;
    const nombreAlumno = elemento.querySelector("strong").innerText;
    const tituloTrabajo = elemento.querySelector("h3").innerText;

    // Buscamos o creamos el reproductor de video local
    let videoExistente = document.getElementById("videoPlayerLocal");
    if (!videoExistente) {
        videoExistente = document.createElement("video");
        videoExistente.id = "videoPlayerLocal";
        videoExistente.className = "video-grande";
        videoExistente.controls = true; // Para que puedan pausar y subir volumen
        modal.insertBefore(videoExistente, textoModal);
    }

    videoExistente.style.display = "inline-block";
    videoExistente.src = rutaVideo;
    videoExistente.play(); // Iniciar automáticamente

    modal.style.display = "block";
    textoModal.innerText = tituloTrabajo + " - Por: " + nombreAlumno;
}

// IMPORTANTE: Actualiza tu función cerrarZoom para que también detenga este video
function cerrarZoom() {
    const modal = document.getElementById("modalZoom");
    const videoYouTube = document.getElementById("videoPlayer");
    const videoLocal = document.getElementById("videoPlayerLocal");

    modal.style.display = "none";
    
    if (videoYouTube) videoYouTube.src = ""; 
    if (videoLocal) {
        videoLocal.pause();
        videoLocal.src = "";
    }
}

function cerrarZoom() {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const videoExistente = document.getElementById("videoPlayer");

    modal.style.display = "none";
    
    // Resetear imagen
    imgModal.src = "";
    
    // Si hay un video, lo detenemos vaciando el src
    if (videoExistente) {
        videoExistente.src = "";
        videoExistente.style.display = "none";
    }
}

// Cerrar también con la tecla Escape (Correctamente cerrado)
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        cerrarZoom();
    }
});

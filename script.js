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

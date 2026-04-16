function abrirZoom(elemento) {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const textoModal = document.getElementById("nombreAlumnoZoom");
    
    // Obtenemos los datos de la tarjeta clicada
    const rutaImagen = elemento.querySelector("img").src;
    const nombreAlumno = elemento.querySelector("strong").innerText;
    const tituloTrabajo = elemento.querySelector("h3").innerText;
    
    // Asignamos los datos al modal
    modal.style.display = "block";
    imgModal.src = rutaImagen;
    textoModal.innerText = tituloTrabajo + " - Por: " + nombreAlumno;
}

function cerrarZoom() {
    document.getElementById("modalZoom").style.display = "none";
}

// Cerrar también con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        cerrarZoom();
    }

function abrirVideo(url, titulo, autor) {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const textoModal = document.getElementById("nombreAlumnoZoom");

    // Ocultamos la imagen para mostrar un iframe de video
    imgModal.style.display = "none";
    
    // Creamos el reproductor de YouTube si no existe o lo actualizamos
    let videoExistente = document.getElementById("videoPlayer");
    if (!videoExistente) {
        videoExistente = document.createElement("iframe");
        videoExistente.id = "videoPlayer";
        videoExistente.className = "video-grande";
        modal.insertBefore(videoExistente, textoModal);
    }
    
    videoExistente.style.display = "inline-block";
    videoExistente.src = url + "?autoplay=1"; // Para que empiece solo
    
    modal.style.display = "block";
    textoModal.innerText = titulo + " - Por: " + autor;
}

// Modifica la función cerrarZoom para que también detenga el video
function cerrarZoom() {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const videoExistente = document.getElementById("videoPlayer");

    modal.style.display = "none";
    imgModal.style.display = "block"; // Reset para fotos
    
    if (videoExistente) {
        videoExistente.src = ""; // Esto detiene el sonido del video
        videoExistente.style.display = "none";
    }
}
});

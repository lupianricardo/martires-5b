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
});

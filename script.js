function abrirZoom(elemento) {
    const modal = document.getElementById("modalZoom");
    const imgModal = document.getElementById("imgExpandida");
    const imagenOriginal = elemento.querySelector("img").src;
    
    modal.style.display = "block";
    imgModal.src = imagenOriginal;
}

function cerrarZoom() {
    document.getElementById("modalZoom").style.display = "none";
}
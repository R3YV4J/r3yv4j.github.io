// Función para abrir la imagen en pantalla completa
function openFullscreen(imageSrc) {
    document.getElementById("fullscreenImage").src = imageSrc;
    document.getElementById("fullscreenOverlay").style.display = "flex";
}

// Función para cerrar la imagen en pantalla completa
function closeFullscreen() {
    document.getElementById("fullscreenOverlay").style.display = "none";
}
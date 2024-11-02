let currentIndex = 0; // Índice actual de las certificaciones
const certifications = document.querySelectorAll('.certification');
const dots = document.querySelectorAll('.dot');

function showCertifications(index) {
    // Calcula el índice de inicio para mostrar las certificaciones
    const start = index * 3;
    const end = start + 3;

    // Oculta todas las certificaciones
    certifications.forEach((cert, i) => {
        cert.style.display = 'none'; // Oculta cada certificación
    });

    // Muestra solo las certificaciones en el rango actual
    for (let i = start; i < end && i < certifications.length; i++) {
        certifications[i].style.display = 'block';
    }

    // Actualiza los puntos indicadores
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

// Muestra las certificaciones iniciales
showCertifications(currentIndex);

// Función para cambiar las certificaciones cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % Math.ceil(certifications.length / 3);
    showCertifications(currentIndex);
}, 3000); // Cambia cada 3 segundos

// Añadir evento a los puntos para navegar manualmente
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index);
        showCertifications(currentIndex);
    });
});



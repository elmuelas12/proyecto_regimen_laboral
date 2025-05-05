document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos el carrusel
  const flickityElement = document.querySelector('.gallery');

  // Inicializamos Flickity
  const flkty = new Flickity(flickityElement, {
    wrapAround: true,      // Bucle continuo
    pageDots: false,       // Desactivar los puntos de navegación
    prevNextButtons: false, // Desactivar los botones prev/next
    autoPlay: 5000,        // Activar autoPlay cada 5 segundos
  });

  // Configurar el intervalo para avanzar cada 5 segundos
  setInterval(function() {
    flkty.next();  // Avanza al siguiente elemento
  }, 5000); // 5000ms = 5 segundos

  // Pausar/reanudar autoPlay al hacer clic en el botón
  const toggleButton = document.querySelector('.info button');
  
  toggleButton.addEventListener('click', function() {
    if (flkty.options.autoPlay) {
      flkty.stopPlayer(); // Pausa el carrusel
      toggleButton.textContent = "Reanudar"; // Cambiar el texto del botón
    } else {
      flkty.playPlayer(); // Reanuda el carrusel
      toggleButton.textContent = "Pausar"; // Cambiar el texto del botón
    }
  });
});


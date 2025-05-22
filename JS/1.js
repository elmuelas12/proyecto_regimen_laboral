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

let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  function showItem(index) {
    const totalItems = items.length;
    index = (index + totalItems) % totalItems;
    
    items.forEach((item, i) => {
      item.classList.remove('active');
      item.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
      if (i === index) {
        item.classList.add('active');
      }
    });

    currentIndex = index;
  }

  prevButton.addEventListener('click', () => showItem(currentIndex - 1));
  nextButton.addEventListener('click', () => showItem(currentIndex + 1));

  // Inicializa el carrusel en el primer ítem
  showItem(currentIndex);

// Toggle para el menú principal en móviles
  const iconMenu = document.getElementById("icon-menu");
  const navList = document.querySelector(".menu nav ul");

  iconMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // Toggle para el submenú "Temas de Interés"
  const submenu = document.querySelector(".submenu > a");
  const submenuParent = document.querySelector(".submenu");

  submenu.addEventListener("click", (e) => {
    e.preventDefault();
    submenuParent.classList.toggle("open");
  });
  

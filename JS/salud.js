
const slides = document.querySelectorAll('.slide');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');
let index = 0;

function mostrarSlide(nuevoIndex) {
slides.forEach((slide, i) => {
    slide.classList.remove('activo');
    if (i === nuevoIndex) {
    slide.classList.add('activo');
    }
});
index = nuevoIndex;
}

btnAnterior.addEventListener('click', () => {
let nuevo = (index - 1 + slides.length) % slides.length;
mostrarSlide(nuevo);
});

btnSiguiente.addEventListener('click', () => {
let nuevo = (index + 1) % slides.length;
mostrarSlide(nuevo);
});

// Avance automático
setInterval(() => {
let nuevo = (index + 1) % slides.length;
mostrarSlide(nuevo);
}, 6000);

const iconMenu = document.getElementById('icon-menu');
  const menuList = document.querySelector('.menu nav ul');

  iconMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menuList.classList.toggle('active');
  });

  // Para cerrar el menú al hacer clic en un enlace
  const enlaces = document.querySelectorAll('.menu nav ul li a');
  enlaces.forEach(link => {
    link.addEventListener('click', () => {
      iconMenu.classList.remove('active');
      menuList.classList.remove('active');
    });
  });


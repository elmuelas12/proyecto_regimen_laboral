
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

document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos los <li> que tienen submenu (un <ul> hijo)
  const menuItems = document.querySelectorAll('.menu nav ul > li');

  menuItems.forEach(item => {
    const submenu = item.querySelector('ul');
    const link = item.querySelector('a');

    if (submenu && link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // evitar que el link navegue

        // Cerramos todos los submenus excepto el actual
        document.querySelectorAll('.menu nav ul li ul').forEach(otherSubmenu => {
          if (otherSubmenu !== submenu) {
            otherSubmenu.classList.remove('visible');
          }
        });

        // Alternamos el submenu actual
        submenu.classList.toggle('visible');
      });
    }
  });

  // Cerrar submenu si clic fuera del menú
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.menu nav ul > li')) {
      document.querySelectorAll('.menu nav ul li ul').forEach(submenu => {
        submenu.classList.remove('visible');
      });
    }
  });
});
document.querySelectorAll('.menu nav ul li:has(ul) > a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // evitar scroll o navegación
    const submenu = link.nextElementSibling;
    submenu.classList.toggle('visible');
  });
});
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault(); // Evita que el enlace navegue
    const submenu = toggle.nextElementSibling;

    if (submenu.classList.contains('visible')) {
      submenu.classList.remove('visible'); // Cierra si ya está abierto
    } else {
      // Cierra otros submenús abiertos (si quieres que solo uno esté abierto)
      document.querySelectorAll('.submenu.visible').forEach(openMenu => {
        openMenu.classList.remove('visible');
      });
      submenu.classList.add('visible'); // Abre el actual
    }
  });
});

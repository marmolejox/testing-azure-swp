document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('menu');

    console.log("mobile-menu loaded")

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace (en móvil)
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });

    // Ajustar menú en cambio de tamaño de ventana
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });
});

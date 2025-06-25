document.addEventListener('DOMContentLoaded', function() {
    // Botón de scroll to top
    const scrollToTopButton = document.getElementById('scroll-to-top');
    
    // Mostrar u ocultar el botón basado en la posición del scroll
    window.addEventListener('scroll', function() {
        scrollToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
    
    // Scroll suave hacia arriba
    scrollToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Botón de email - acción directa mailto
    document.getElementById('email-button').addEventListener('click', function() {
        window.location.href = 'mailto:contact@ctech-s.com';
    });
});
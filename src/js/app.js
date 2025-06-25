document.addEventListener("DOMContentLoaded", () => {
    console.log("Successfully loaded.");
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.ctechs-contact-us-form');
    const nameInput = document.getElementById('contact-name-placeholder');
    const emailInput = document.getElementById('contact-email-placeholder');
    const phoneInput = document.getElementById('contact-phone-placeholder');
    const sendButton = document.getElementById('send-request');

    const htmlLang = document.documentElement.lang; // Obtiene el valor del atributo lang del <html>

    let subjectText, bodyMessage, buttonText, targetEmail;

    // Definir textos y dirección de correo según el idioma
    if (htmlLang === 'es') {
        subjectText = 'Mensaje del Formulario de Contacto - de ';
        bodyMessage = 'Por favor, introduce tu mensaje aquí.';
        buttonText = 'Enviar Solicitud';
        targetEmail = 'ventas@ctech-s.com'; // Correo para la versión en español

        // Actualizar placeholders para español
        nameInput.placeholder = 'Tu Nombre';
        emailInput.placeholder = 'Tu Correo Electrónico';
        phoneInput.placeholder = 'Teléfono';

    } else { // Asumimos inglés por defecto si no es 'es'
        subjectText = 'Contact Us Form - Message from ';
        bodyMessage = 'Please enter your message here.';
        buttonText = 'Send Request';
        targetEmail = 'contact@ctech-s.com'; // Correo para la versión en inglés

        // Los placeholders ya están en inglés en tu HTML, no es necesario cambiarlos aquí
    }

    // Actualizar el texto del botón
    sendButton.textContent = buttonText;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        const subject = encodeURIComponent(`${subjectText}${name}`);
        const body = encodeURIComponent(
            `${(htmlLang === 'es' ? 'Nombre' : 'Name')}: ${name}\n` +
            `${(htmlLang === 'es' ? 'Correo Electrónico' : 'Email')}: ${email}\n` +
            `${(htmlLang === 'es' ? 'Teléfono' : 'Phone')}: ${phone}\n\n` +
            `${bodyMessage}`
        );

        // Usa la dirección de correo electrónico definida según el idioma
        const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    });
});
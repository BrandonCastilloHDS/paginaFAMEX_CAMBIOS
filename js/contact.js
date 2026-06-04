document.getElementById('sendMessageBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la acción predeterminada del botón

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validar que todos los campos estén llenos
    if (!name || !email || !subject || !message) {
        alert('Por favor completa todos los campos antes de enviar.');
        return;
    }

    // Crear el cuerpo del correo
    const mailtoLink = `mailto:prensa@f-airmexico.com.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nombre: " + name + "\nEmail: " + email + "\n\n" + message)}`;

    // Abrir el cliente de correo del usuario con los datos prellenados
    window.location.href = mailtoLink;
});


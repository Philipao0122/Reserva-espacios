// Validación y redirección del formulario de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío automático del formulario

    // Obtener los valores de los campos del formulario
    var cedula = document.getElementById('cedula').value;
    var password = document.getElementById('password').value;
    var roleId = document.getElementById('roleId').value;

    // Validar que todos los campos estén completos
    if (cedula === '' || password === '' || roleId === '') {
        alert('Por favor, complete todos los campos');
    } else {
        // Redirigir a diferentes páginas según el Rol seleccionado
        if (roleId === 'admin') {
            window.location.href = 'reservas_admin.html'; // Redirige a la página del administrador
        } else {
            window.location.href = 'reservas.html'; // Redirige a la página de usuarios normales
        }
    }
});

// Funcionalidad del botón Cancelar
document.getElementById('cancelButton').addEventListener('click', function() {
    // Limpiar los campos del formulario
    document.getElementById('loginForm').reset();
});

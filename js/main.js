// Muestra un mensaje de bienvenida al hacer clic en el botón de la portada principal
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnMensaje');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('¡Bienvenido al sitio de presentación del Grupo 8!');
        });
    }
});
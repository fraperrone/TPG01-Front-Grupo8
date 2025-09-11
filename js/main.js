// Muestra un mensaje de bienvenida al hacer clic en el botón de la portada principal
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnMensaje');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('¡Bienvenido al sitio de presentación del Grupo 8!');
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.createElement("section");
    section.id = "saludar";

    const boton = document.createElement("button");
    boton.textContent = "Saludar";
    boton.classList.add("btn-saludo");

    section.appendChild(boton);

    const main = document.querySelector("main");
    main.appendChild(section);

    boton.addEventListener("click", () => {
    alert("Hola, bienvenido a mi perfil!");
    });
});



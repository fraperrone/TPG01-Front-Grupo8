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
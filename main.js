const boton = document.querySelector(".boton");
const navMenu = document.querySelector(".barra");

boton.addEventListener("click", () => {
    navMenu.classList.toggle("barra_visible");
});

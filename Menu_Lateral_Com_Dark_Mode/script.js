const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const sidebar__toggle = document.querySelector(".sidebar__toggle");
const menu__pesquisa = document.querySelector(".menu__pesquisa");
const modo = document.querySelector(".modo");
const modo__escolha = document.querySelector(".modo__escolha");
const modo__texto = document.querySelector(".modo__texto");

sidebar__toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
menu__pesquisa.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modo.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modo__texto.textContent = "Modo Claro";
    }else{
        modo__texto.textContent = "Modo Escuro";
    }
});
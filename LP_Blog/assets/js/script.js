var menu_toggle = document.querySelector(".navbar__menu-toggle");
var acoes_toggle = document.querySelector(".navbar__acoes-toggle");
var header_right = document.querySelector(".header-right__section");


if (menu_toggle) {
    menu_toggle.addEventListener("click", () => {
        
        menu_toggle.classList.toggle("navbar__menu-toggle--ativo");
    });
}

if (acoes_toggle) {
    acoes_toggle.addEventListener("click", () => {
        
        acoes_toggle.classList.toggle("navbar__acoes-toggle--ativo");
    });
}


acoes_toggle.addEventListener("click", () => {
        
    header_right.classList.toggle("header-right__section--ativo");
});


var swiper = new Swiper(".breaking__container", {
    centeredSlides: true,
    cssMode: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        640:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
});
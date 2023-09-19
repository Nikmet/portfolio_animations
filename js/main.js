const menu = document.querySelector(".header-nav");
const menuBtn = document.querySelector(".nav-btn");
const menuBtnImg = document.querySelector(".nav-btn-img");

menuBtn.addEventListener("click", () => {
    if (menu.classList.toggle("open")) {
        menuBtnImg.src = "/assets/nav-close.svg";
    } else {
        menuBtnImg.src = "/assets/nav.svg";
    }
});

AOS.init({
    once: true
});

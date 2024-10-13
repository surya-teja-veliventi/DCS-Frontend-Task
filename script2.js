const hamMenu = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off-screen-nav-bar");

hamMenu.addEventListener("click", ()=>{
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});
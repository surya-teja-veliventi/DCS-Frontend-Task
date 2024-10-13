let scrollDestination = document.querySelector(".popular-destination");
let nextBtn1 = document.getElementById("dest-next-btn");
let prevBtn1 = document.getElementById("dest-prev-btn");

nextBtn1.addEventListener("click", ()=>{
    scrollDestination.scrollLeft -= 270; 
    
}); 
prevBtn1.addEventListener("click", ()=>{
    scrollDestination.scrollLeft += 270;
});

// //////////////////////////

let scrollHappyCus = document.querySelector(".happy-reviews");
let nextBtn2 = document.getElementById("happy-cus-next-btn");
let prevBtn2 = document.getElementById("happy-cus-prev-btn");

nextBtn2.addEventListener("click", ()=>{
    scrollHappyCus.scrollLeft += 475;
});
prevBtn2.addEventListener("click", ()=>{
    scrollHappyCus.scrollLeft -= 475;
});

// /////////////////////////

const hamMenu = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off-screen-nav-bar");

hamMenu.addEventListener("click", ()=>{
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});
// selection
const menuBtn = document.querySelector("#menu");
const closeMenuBtn=document.querySelector("#close-menu");
const menu =document.querySelector("mobile-navbar");

// functions


// events

menuBtn.addEventListener("click", (e)=>{
    menu.classList.add("menu-active")

});


closemenuBtn.addEventListener("click", (e)=>{
    menu.classList.remove("menu-active")

});
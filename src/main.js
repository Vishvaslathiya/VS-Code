const hamburger = document.getElementById("hamburger");
const nav_close = document.getElementById("nav-close");
const navmenu = document.getElementById("navmenu");;



nav_close.addEventListener("click",()=>{
    navmenu.classList.add('hidden');

})

hamburger.addEventListener("click",()=>{
    navmenu.classList.remove('hidden');
})
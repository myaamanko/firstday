let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active")
})
document.querySelector(".open-btn").addEventListener("click", function() {
    document.querySelector(".cookie").classList.add('active')

})
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".cookie").classList.remove('active')
});
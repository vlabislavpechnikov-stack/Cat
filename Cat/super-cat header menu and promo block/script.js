let menu = document.querySelector(".header-menu")
let button = document.querySelector(".header-toggle")

button.addEventListener("click", function() {
  button.classList.toggle('toggle-closed')
  menu.classList.toggle('header-menu_closed')
})
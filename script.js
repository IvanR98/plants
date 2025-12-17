const nav_menu = document.querySelector(".nav_menu")
const off_screen_menu = document.querySelector(".off_screen_menu")
const basic = document.querySelector(".basic")

nav_menu.addEventListener("click", () => {
    nav_menu.classList.toggle('active')
    off_screen_menu.classList.toggle('active')
})


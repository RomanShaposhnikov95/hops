const open = document.querySelector(".auth-header-bottom-control-open")
const close = document.querySelector(".auth-header-bottom-wrap-list-close-btn")
const menu = document.querySelector(".auth-header-bottom-wrap-list")
const overlay = document.querySelector(".overlay")

const menuTop = document.querySelector(".auth-header-top")
const duplicate = document.querySelector(".duplicate")


open.addEventListener("click", () => {
    menu.style.right = "0"
    overlay.style.left = "0"
    overlay.style.opacity = "0.5"
    document.body.style.overflow = "hidden"
})

const closeMenu = () => {
    menu.style.right = "-100%"
    overlay.style.left = "-100%"
    overlay.style.opacity = "0"
    document.body.style.overflow = "unset"
}

close.addEventListener("click", () => {
    closeMenu()
})

overlay.addEventListener("click", () => {
    closeMenu()
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        closeMenu()
    }
});


duplicate.innerHTML = menuTop.innerHTML



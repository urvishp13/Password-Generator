const themeSelectBtn = document.getElementById("theme-select")
const themes = document.getElementById("themes")

themeSelectBtn.addEventListener("click", function() {
    themes.classList.toggle("show")
})

themes.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        themes.classList.remove("show")
    }
})
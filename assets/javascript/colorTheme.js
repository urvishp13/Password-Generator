const themeBtn = document.getElementById("theme")
const themeSettings = document.getElementById("theme-settings")

themeBtn.addEventListener("click", function() {
    themeSettings.classList.toggle("show")
})

themeSettings.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        themeSettings.classList.remove("show")
    }
})
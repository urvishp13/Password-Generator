const themeSelectBtn = document.getElementById("theme-select")
const themes = document.getElementById("themes")
const body = document.body

const light = document.getElementById("light-icon")
const dark = document.getElementById("dark-icon")
const system = document.getElementById("system-icon")

const availableThemes = ["light", "dark", "system"]

themeSelectBtn.addEventListener("click", function() {
    themes.classList.toggle("show")
})

themes.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        themes.classList.remove("show")
    }
})

light.addEventListener("click", () => setTheme("light"))
dark.addEventListener("click", () => setTheme("dark"))
system.addEventListener("click", () => setTheme("system"))

function setTheme(theme) {
    for (const th of availableThemes) {
        body.classList.remove(th)
    }
    body.classList.add(theme)
}
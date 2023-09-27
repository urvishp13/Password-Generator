const themeSelectBtn = document.getElementById("theme-select")
const themes = document.getElementById("themes")
const body = document.body

const lightBtn = document.getElementById("light")
const darkBtn = document.getElementById("dark")
const systemBtn = document.getElementById("system")

const availableThemes = ["light", "dark", "system"]

// display/hide the theme options when clicking the "Theme" button on the web app
themeSelectBtn.addEventListener("click", function() {
    themes.classList.toggle("show")
})

themes.addEventListener("click", function(e) {
    // if you click on the icon or its surrounding space
    if (e.target.tagName === "IMG" || e.target.tagName === "BUTTON") {
        themes.classList.remove("show")
    }
})

lightBtn.addEventListener("click", () => setTheme("light"))
darkBtn.addEventListener("click", () => setTheme("dark"))
systemBtn.addEventListener("click", () => setTheme("system"))

function setTheme(theme) {
    // clear body tag of all its classes
    for (const th of availableThemes) {
        body.classList.remove(th)
    }
    // to add the class of the theme user wants to apply to page
    body.classList.add(theme)
}
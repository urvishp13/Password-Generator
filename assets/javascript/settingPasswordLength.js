const pswdLength = document.getElementById("pswd-length-number")
const upArrowHead = document.getElementById("up-arrowhead")
const downArrowHead = document.getElementById("down-arrowhead")

upArrowHead.addEventListener("click", function() {
    if (pswdLength.textContent < 15) {
        pswdLength.textContent++
    }
})

downArrowHead.addEventListener("click", function() {
    if (pswdLength.textContent > 8) {
        pswdLength.textContent--
    }
})
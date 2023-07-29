const pswdLength = document.getElementById("pswd-length-number")

let lastY

/* ---------- FOR MOUSE USERS ---------- */

let clicked = false
// if the password length field is clicked on
pswdLength.addEventListener("mousedown", function() {
    clicked = true
})

// while the mouse is being dragged after clicking on the password length field 
document.addEventListener("mousemove", function(e) {
    if (clicked === true) {
        alterPswdLength(e.y)
    }
})

// once the mouse is released, stop incrementing/decrementing the password length
document.addEventListener("mouseup", function() {
    clicked = false
})

/* ---------- FOR PHONE USERS ---------- */

let touched = false
// if the password length field is touched
pswdLength.addEventListener("touchstart", function() {
    touched = true
})

// while the finger is being dragged along the screen after clicking on the password length field 
document.addEventListener("touchmove", function(e) {
    if (touched === true) {
        alterPswdLength(e.touches[0].clientY)
    }
})

// once the mouse is released, stop incrementing/decrementing the password length
document.addEventListener("touchend", function() {
    touched = false
})

/* ----------------- FUNCTIONS --------------------- */

function alterPswdLength(currentY) {
    if (currentY < lastY) { // mouse/finger moved up
        pswdLength.textContent < 15 ? pswdLength.textContent++ : pswdLength.textContent
    } else { // mouse/finger moved down
        pswdLength.textContent > 8 ? pswdLength.textContent-- : pswdLength.textContent
    }

    lastY = currentY
}
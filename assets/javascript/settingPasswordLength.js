const pswdLength = document.getElementById("pswd-length-number")

let clicked = false
// if the password length field is clicked on
pswdLength.addEventListener("mousedown", function() {
    clicked = true
})

let lastY
// while the mouse is being dragged after clicking on the password length field 
document.addEventListener("mousemove", function(e) {
    if (clicked === true) {
        if (e.y < lastY) { // mouse moved up
            pswdLength.textContent < 15 ? pswdLength.textContent++ : pswdLength.textContent
        } else { // mouse moved down
            pswdLength.textContent > 8 ? pswdLength.textContent-- : pswdLength.textContent
        }

        lastY = e.y
    }
})

// once the mouse is released, stop incrementing/decrementing the password length
document.addEventListener("mouseup", function() {
    clicked = false
})
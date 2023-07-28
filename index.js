const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
     "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
     "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", 
     "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const generatePasswordBtn = document.getElementById("generate-passwords-btn")
const password1 = document.getElementById("password-1")
const password2 = document.getElementById("password-2")
const pswdLength = document.getElementById("pswd-length-number")


// when User clicks "generate passwords"
generatePasswordBtn.addEventListener("click", function () {
    // generate password1 and write it to the DOM
    password1.textContent = generatePassword()
    // generate password2 and write it to the DOM
    password2.textContent = generatePassword()
})

function generatePassword() {
    // randomly get 15 characters from the characters array
    // put them in an array called password
    // after gotten 15 characters, join the characters in password array
    // return the password

    const password = []
    for (let count = 0; count < 15; count++) {
        const randomIndex = Math.floor( Math.random() * characters.length ) + 1
        password.push( characters[randomIndex] )
    }

    return password.join('')
}

let clicked = false
// if the password length field is clicked on
pswdLength.addEventListener("mousedown", function() {
    clicked = true
})

// while the mouse is being dragged after clicking on the password length field 
document.addEventListener("mousemove", function(e) {
    if (clicked === true) {
        pswdLength.textContent++
    }
})

// once the mouse is released, stop incrementing/decrementing the password length
document.addEventListener("mouseup", function() {
    clicked = false
})








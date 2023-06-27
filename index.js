const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
     "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
     "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", 
     "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const generatePasswordBtn = document.getElementById("generate-btn")


// when User clicks "generate passwords"
generatePasswordBtn.addEventListener("click", function () {
    // generate password1 and write it to the DOM
    // generate password2 and write it to the DOM
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







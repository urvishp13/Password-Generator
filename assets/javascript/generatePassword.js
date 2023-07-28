const alphabet = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const specialChars = "`~!@#$%^&*()-_=+[]{}|;:'\",<.>/\\?"
const numbers = "1234567890"

const generatePasswordBtn = document.getElementById("generate-passwords-btn")
const password1 = document.getElementById("password-1")
const password2 = document.getElementById("password-2")
const includeNums = document.getElementById("include-numbers")
const includeSpecialChars = document.getElementById("include-special-chars")

// when User clicks "generate passwords"
generatePasswordBtn.addEventListener("click", function () {
    // generate password1 and write it to the DOM
    password1.textContent = generatePassword()
    // generate password2 and write it to the DOM
    password2.textContent = generatePassword()
})

function generatePassword() {
    // randomly get the number of characters specified for the password length
        // alphabet will always be used
        // numbers and specialChars will be used depending on if those criteria are checked
        /* store the characters (to be used to generate the password) in characters array */
    // put them in an array called password
    // after gotten 15 characters, join the characters in password array
    // return the password

    const password = []

    let characters = alphabet.split("")
    // console.log(characters)
    if (includeNums.checked) {
        characters = characters.concat(numbers.split(""))
    }
    if (includeSpecialChars.checked) {
        characters = characters.concat(specialChars.split(""))
    }

    console.log(characters)

    for (let count = 0; count < pswdLength.textContent; count++) {
        const randomIndex = Math.floor( Math.random() * characters.length ) + 1
        password.push( characters[randomIndex] )
    }

    return password.join('')
}
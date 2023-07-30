const copyIcons = document.getElementsByClassName("copy-icon-wrapper")

console.log(copyIcons)

// when the first copy icon is clicked
copyIcons[0].addEventListener("click", function() {
    /* copy the associated password to the clipboard*/
    navigator.clipboard.writeText(password1.textContent)

    alert("Copied the password")
})

// when the second copy icon is clicked
copyIcons[1].addEventListener("click", function() {
    /* copy the associated password to the clipboard*/
    navigator.clipboard.writeText(password2.textContent)
    
    alert("Copied the password");
})
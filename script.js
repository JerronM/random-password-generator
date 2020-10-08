
//Event Listener prompts questions
document.querySelector("#generate").addEventListener("click", writePassword);
//Array for password criteria
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "'", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];
//Variables 
var psdLength = "";
var psdUpperCase;
var psdLowerCase;
var psdSpecialChar;
var psdNumber;
//Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    var psdLength = '';
    //User choses a number between 8 and 128
    while (isNaN(psdLength) || psdLength < 8 || psdLength > 128) {
        psdLength = prompt("Choose a password length between 8 and 128");

        if (psdLength === null) {
            alert("Fine. Be like that then...");
            return '';
        }
        else {
            if (isNaN(psdLength) || psdLength < 8 || psdLength > 128) {
                alert("Too Short. Please choose between 8 and 128 characters");
            }
        }
    } 
    alert(`You have selected ${psdLength} characters`);
    //Promt user to accept password criteria
    var psdSpecialChar = confirm("Your password must include special characters");
    var psdNumber = confirm("Your password must include numeric characters");    
    var psdLowerCase = confirm("Your password must include lowercase characters");
    var psdUpperCase = confirm("Your password must include uppercase characters");
    while(psdUpperCase === false && psdLowerCase === false && psdSpecialChar === false && psdNumericChar === false) {
        alert("You must accept all password criteria");
        var psdSpecialChar = confirm("Your password must include special characters");
        var psdNumber = confirm("Your password must include numeric characters");    
        var psdLowerCase = confirm("Your password must include lowercase characters");
        var psdUpperCase = confirm("Your password must include uppercase characters");   
    } 
    var psdCharacters = []
      
    if (psdSpecialChar) {
        psdCharacters = psdCharacters.concat(specialChar)
    }
    if (psdNumber) {
        psdCharacters = psdCharacters.concat(number)
    } 
    if (psdLowerCase) {
        psdCharacters = psdCharacters.concat(alphaLower)
    }
    if (psdUpperCase) {
        psdCharacters = psdCharacters.concat(alphaUpper)
    }
    var randomPassword = ""
    for (var i = 0; i < psdLength; i++) {
        randomPassword = randomPassword + psdCharacters[Math.floor(Math.random() * psdCharacters.length)];
    }
    return randomPassword;
}
//Writes password to "Your Secure Password" box
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

function generatePassword(){
  
  var passwordLength = Range(8, 128)
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


prompt("Please enter a length for your password between 8 - 128")
alert("include special characters?")
alert("include numbers?")
alert("include lower case characters?")
alert("include upper case characters?")


}
// Add event listener to generate button


// promt how many characters

// alert click ok to include special characters

// click ok to confirm numeric characters

// click ok to confirm using lower case characters

// click ok to confirm using upper case characters

// print password

generateBtn.addEventListener("click", writePassword);
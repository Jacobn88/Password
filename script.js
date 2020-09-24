const generateBtn = document.querySelector("#generate");
const special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\"";
const numeric = "1234567890";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextArea = document.querySelector("#password");

  passwordTextArea.value = password;
}

function generatePassword() {
  
  var length = prompt("Please enter a length for your password between 8 - 128");
  length = parseInt(length); 
  
  
  var includeSpecial = confirm("include special characters?")
  
  var includeNumbers = confirm("include numbers?")

  var inclueLower = confirm("include lower case characters?")
  
  var includeUpper = confirm("include upper case characters?")


  return "lol"
}
// Add event listener to generate button


// promt how many characters

// alert click ok to include special characters

// click ok to confirm numeric characters

// click ok to confirm using lower case characters

// click ok to confirm using upper case characters

// print password

generateBtn.addEventListener("click", writePassword);
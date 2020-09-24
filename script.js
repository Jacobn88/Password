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
  
if (length < 8 || length > 128) {
  alert("Please enter a number between 8 and 128.");
  return null;
}
  
  var includeSpecial = confirm("include special characters?")
  
  var includeNumbers = confirm("include numbers?")

  var includeLower = confirm("include lower case characters?")
  
  var includeUpper = confirm("include upper case characters?")
 
  if (!(includeSpecial || includeNumbers || includeLower || includeUpper)) {
    alert("Please select at least one option");
    return null;
  }


  


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
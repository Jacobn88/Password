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
  // length of the password must be between 8 - 128
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.");
    return null;
  }

  var includeSpecial = confirm("include special characters?");
  var includeNumbers = confirm("include numbers?");
  var includeLower = confirm("include lower case characters?");
  var includeUpper = confirm("include upper case characters?");
  // must select at least one 
  if (!(includeSpecial || includeNumbers || includeLower || includeUpper)) {
    alert("Please select at least one option");
    return null;
  }

  var vocabulary = "";
  if (includeSpecial) {
    // vocabulary = vocabulary + special;
    vocabulary += special;
  }
  if (includeNumbers) {
    vocabulary += numeric;
  }
  if (includeLower) {
    vocabulary += lower;
  }
  if (includeUpper) {
    vocabulary += upper;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = getRandomInt(vocabulary.length);
    password += vocabulary.charAt(randomIndex);

  }
  return password;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

generateBtn.addEventListener("click", writePassword);
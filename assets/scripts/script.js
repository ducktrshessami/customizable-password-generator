// Assignment Code
var generateBtn = document.querySelector("#generate");
var charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
var charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsetNumbers = "0123456789";
var charsetSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // I really don't like spaces in passwords though
var lenMin = 8, lenMax = 128, lenDefault = 8;
var lastUsed;

// Random integer in range; min is inclusive, max is exclusive
function randIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt user for password criteria
function getPasswordCriteria() {
  var criteria = {charset: ""};
  if (lastUsed && confirm("Use same settings?")) { // For styling purposes, should I be doing Boolean(lastUsed) or is this fine?
    criteria = lastUsed;
  }
  else {
    criteria.passLength = Math.min(Math.max(parseInt(prompt("Length of password? (Minimum: " + lenMin + ", Maximum: " + lenMax + ")")) || lenDefault, lenMin), lenMax);
    if (confirm("Include lowercase characters?")) { // Is minimizing memory usage really worth a 163 character long line?
      criteria.charset += charsetLowercase;
    }
    if (confirm("Include uppercase characters?")) {
      criteria.charset += charsetUppercase;
    }
    if (confirm("Include numeric characters?")) {
      criteria.charset += charsetNumbers;
    }
    if (confirm("Include special characters?")) {
      criteria.charset += charsetSpecial;
    }
    lastUsed = criteria;
  }
  return criteria;
}

// Generate password based on criteria
function generatePassword() {
  var criteria = getPasswordCriteria(), password = "";
  for (let i = 0; i < criteria.passLength; i++) {
    password += criteria.charset[randIntInRange(0, criteria.charset.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // I feel like Brian told us we'd need to look this up, but here we are

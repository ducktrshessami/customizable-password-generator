// Assignment Code
var generateBtn = document.querySelector("#generate");
var lenMin = 8, lenMax = 128, lenDefault = 8;
var lastUsed;

// Random integer in range; min/max are inclusive
function randIntInRange(min, max) {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt user for password criteria
function getPasswordCriteria() {
  var criteria = {};
  if (lastUsed && prompt("Use same settings?")) { // For styling purposes, should I be doing Boolean(lastUsed) or is this fine?
    criteria = lastUsed;
  }
  else {
    criteria.passLength = Math.min(Math.max(parseInt(prompt("Length of password?")) || lenDefault, lenMin), lenMax);
    criteria.lowercase = confirm("Include lowercase characters?");
    criteria.uppercase = confirm("Include uppercase characters?");
    criteria.numeric = confirm("Include numeric characters?");
    criteria.special = confirm("Include special characters?");
    lastUsed = criteria;
  }
  return criteria;
}

// Generate password based on criteria
function generatePassword() {
  var criteria = getPasswordCriteria();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

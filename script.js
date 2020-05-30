// Assignment Code
var generateBtn = document.querySelector("#generate");


//String sets 
lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numericSet = "0123456789";
specialSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate Password
function generatePassword() {

  //How many characters
  var length = prompt("How many characters?");

  // Check length
  if (length < 8) {
    alert("Password is too short");
    return;
  } else if (length > 128) {
    alert("Password is too long");
    return;
  }

  //Lowercase
  var lowercase = prompt("Do you want to include lowecase? y/n ");

  //client side validation
  console.log(lowercase);
  if (lowercase !='y' && lowercase !='n') {
    alert("invalid input!");
    return;
  }

  //Uppercase
  var uppercase = prompt("Do you want to include uppercase? y/n ");

  //client side validation
  if (uppercase != 'y' && uppercase != 'n') {
    alert("invalid input!");
    return;
  }

  //Numeric
  var numeric = prompt("Do you want to include numeric? y/n ");

  //client side validation
  if (numeric != 'y' && numeric != 'n') {
    alert("invalid input!");
    return;
  }

  //Special characters
  var specialChar = prompt("Do you want to include special characters? y/n ");

  //client side validation
  if (specialChar != 'y' && specialChar != 'n') {
    alert("invalid input!");
    return;
  }

  //Possible characters
  possibleChar = "";

  //If Lowercase is selected
  if (lowercase == 'y') {
    possibleChar += lowercaseSet;
  }

  //If uppercase is selected
  if (uppercase == 'y') {
    possibleChar += uppercaseSet;
  }

  //If numeric is selected
  if (numeric == 'y') {
    possibleChar += numericSet;
  }

  //If special is selected
  if (specialChar == 'y') {
    possibleChar += specialSet;
  }

  //Check possible characters
  console.log(possibleChar);

  //Create new password
  newPassword = "";
  for (var i = 0, n = possibleChar.length; i < length; ++i) {
    newPassword += possibleChar.charAt(Math.floor(Math.random() * n));
  }
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

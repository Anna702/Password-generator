// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordInput = {};
  let passwordLength = parseInt(
    prompt(`
How many characters would you like your password to be? Please provide a number between 8 and 128.`)
  );

  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    passwordInput.passwordLength = passwordLength;
  } else {
    alert(
      `The entered value is not a number or is not within the valid range. Please provide a number between 8 and 128.`
    );
// Recursive call to get a valid input
    return getPasswordOptions();
  }

  alert(`Let's choose which character types you want to include.`);

// Collect info about characters as booleans.
  passwordInput.lowerChars = confirm(
    `Do you want to include lowercase characters? Press 'Cancel' for 'No' and 'Ok' for 'Yes'.`
  );
  passwordInput.upperChars = confirm(
    `Do you want to include uppercase characters? Press 'Cancel' for 'No' and 'Ok' for 'Yes'.`
  );
  passwordInput.numericChars = confirm(
    `Do you want to include numeric characters? Press 'Cancel' for 'No' and 'Ok' for 'Yes'.`
  );
  passwordInput.specialChars = confirm(
    `Do you want to include special characters ($@%&*, etc)? Press 'Cancel' for 'No' and 'Ok' for 'Yes'.`
  );

//checking if user chose at least one character type
  if (
    passwordInput.lowerChars === true ||
    passwordInput.upperChars === true ||
    passwordInput.numericChars === true ||
    passwordInput.specialChars === true
  ) {
    console.log(passwordInput);
    return passwordInput;
  } else {
    alert("At least one character type should be selected. Please start over.");
// Recursive call to get a valid input
    return getPasswordOptions();
  }
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

//ask user about the password length
//ask about character options
// take random elements from random arrays password length times
//create a password with it

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

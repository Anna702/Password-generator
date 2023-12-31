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

//ask user about the password length
//ask about character options
//take random elements from random arrays password length times
//create a password with it

// Function to prompt user for password options

//The passwordInput var should be declared outside the function so it can be used in other parts of the code.
let passwordInput = {};

function getPasswordOptions() {
  alert(`Let's generate your new password!`);

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

  alert(`Be ready to press the 'Generate Password' button, OK?`);

  //checking if user chose at least one character type
  if (
    passwordInput.lowerChars === true ||
    passwordInput.upperChars === true ||
    passwordInput.numericChars === true ||
    passwordInput.specialChars === true
  ) {
    return passwordInput;
  } else {
    alert("At least one character type should be selected. Please start over.");
    // Recursive call to get a valid input
    return getPasswordOptions();
  }
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  // generating random array index
  const randomIndex = Math.floor(Math.random() * arr.length);

  // getting random element from array
  const randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  // creating array to store inputs with a true value
  let trueInputs = [];
  for (let key in passwordInput) {
    if (passwordInput[key] === true) {
      trueInputs.push(key);
    }
  }

  // creating array with chosen characters
  let inputs = [];
  for (let i = 0; i < trueInputs.length; i++) {
    if (trueInputs[i] === "lowerChars") {
      inputs.push(lowerCasedCharacters);
    } else if (trueInputs[i] === "upperChars") {
      inputs.push(upperCasedCharacters);
    } else if (trueInputs[i] === "specialChars") {
      inputs.push(specialCharacters);
    } else if (trueInputs[i] === "numericChars") {
      inputs.push(numericCharacters);
    }
  }

  //we need counter to prevent an infinite loop, the counter should be less than the password length

  let counter = 0;
  let newPassword = [];
  while (
    newPassword.length <= passwordInput.passwordLength &&
    counter < passwordInput.passwordLength
  ) {
    for (let i = 0; i < inputs.length; i++) {
      newPassword.push(getRandom(inputs[i]));
    }
    counter++;
  }

  //The generatePassword function should return a string, not an array. I used join('') to concatenate the array elements into a string.
  return newPassword.join("");
}

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

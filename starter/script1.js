// Arrays of characters
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
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
    // Recursive call to get valid input
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

  console.log(passwordInput);
  return passwordInput;
}

// Get user input for password options
const passwordInput = getPasswordOptions();

// Function to get a random character array based on user input
function getRandomArray(passwordInput) {
  const characterArrays = [];
  if (passwordInput.lowerChars) characterArrays.push(lowerCasedCharacters);
  if (passwordInput.upperChars) characterArrays.push(upperCasedCharacters);
  if (passwordInput.numericChars) characterArrays.push(numericCharacters);
  if (passwordInput.specialChars) characterArrays.push(specialCharacters);

  if (characterArrays.length === 0) {
    alert("At least one character type should be selected. Please start over.");
    return null;
  }

  return characterArrays[Math.floor(Math.random() * characterArrays.length)];
}

// Function to generate a random password
function generatePassword() {
  const selectedCharacters = getRandomArray(passwordInput);
  if (!selectedCharacters) return null;
  let passwordGenerated = "";
  for (let i = 0; i < passwordInput.passwordLength; i++) {
    passwordGenerated += getRandomElement(selectedCharacters);
  }
  return passwordGenerated;
}

// Function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
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

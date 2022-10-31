var generateBtn = document.querySelector("#generate");
const keyStrings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!@#$%&*(){}[];:',/",
};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var passwordCharSet = "";

  var length = window.prompt("Enter number from  8 to 128 for password length.");

  var lowercase = window.confirm("Lowercase letters?");
  if (lowercase) {
    passwordCharSet += keyStrings.lowercase;
  };

  var uppercase = window.confirm("Uppercase letters?");
  if (uppercase) {
    passwordCharSet += keyStrings.uppercase;
  };

  var symbols = window.confirm("Symbols?");
  if (symbols) {
    passwordCharSet += keyStrings.symbol;
  };

  var numbers = window.confirm("Numbers?");
  if (numbers) {
    passwordCharSet += keyStrings.number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}


generateBtn.addEventListener("click", writePassword);
// Password Generator code

// Character variables
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var spec = ["!", "@", "#", "$", "%", "&", "*", "+"]
var randomChar = []; 


// generate password function
function generatePassword () {

  okay = parseInt(prompt('Please enter password length- must be a number between 8 and 128'));
    if (!okay) {
        alert("Must select a number");
        return okay;
    } else if (okay < 8 || okay > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    }


// select uppercase characters
var charUpper = confirm('Would you like to use uppercase characters?')

if (!charUpper) {
  charUpper = '';
} else {
  charUpper = upper;
}

// select lowercase characters
  var charLower = confirm('Would you like to use lowercase characters?')

  if (!charLower) {
    charLower = '';
  } else {
    charLower = lower;
  }
 
// select number characters
  var charNum = confirm('Would you like to use number characters?')

  if (!charNum) {
    charNum = '';
  } else {
    charNum = num
  }

// select special charcters
  var charSpec = confirm('Would you like to use special characters?')

  if (!charSpec) {
    charSpec = '';
  } else {
    charSpec = spec;
  }


// Sets criteria for password: Must select at least one value type. 
  var totalChar = charLower + charUpper + charNum + charSpec;

  if (okay.length <= 0) {
    alert('Must select at least one value type');
    return generatePassword();
  }

 
// randomizes our character types and allows the two variables to interact through concatination
  if (charUpper) {
    randomChar = randomChar.concat(upper);
  } else if (!charUpper) {
    charUpper = '';
  }


  if (charLower) {
    randomChar = randomChar.concat(lower);
  } else if (!charLower) {
    charLower = '';
  }


  if (charNum) {
    randomChar = randomChar.concat(num);
  } else {
    num = '';
  }


  if (charSpec) {
    randomChar = randomChar.concat(spec);
  } else {
    spec = '';
  }


// randomize character length with for loop
  var finalPassword = []
  for (i = 0; i < okay; i++) {
    var range =[Math.floor(Math.random() * randomChar.length)];
    finalPassword = finalPassword + randomChar[range];
  }

  return finalPassword;

}

// apply java to IDs
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
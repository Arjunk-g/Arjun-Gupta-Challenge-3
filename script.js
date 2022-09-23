// Assignment Code
var choices = [];

finalChoice = [];

var generateBtn = document.querySelector("#generate");

var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lettersL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^']

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// var arrays = [numbers, specialCharacters, lettersL, lettersU]

//for(let letter of lettersU){

//lettersL.push(letter.toLowerCase());

//}
//console.log(lettersU, lettersL);



// Write password to the #password input
function writePassword() {


  // make the function "generate password"
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// selfmade function

function generatePassword() {
  // console.log(arrays);

//prompts the user for uppercase, lowercase, numeric, and/or special characters 
var addUpperCase = confirm('would you like to have uppercase letters in the password?');

var addLowerCase = confirm('would you like to have lowercase letters in the password?');

var addSpecialCharacters = confirm('would you like to have special characters letters in the password?');

var addNumbers = confirm('would you like to have numbers in the password?');

var length = prompt('Pick a length between 8 and 128 characters');





if (addUpperCase === true) {

  choices = choices.concat(lettersU);
}

if (addLowerCase === true) {

  choices = choices.concat(lettersL);
}

if (addSpecialCharacters === true) {

  choices = choices.concat(specialCharacters);
}

if (addNumbers === true) {

  choices = choices.concat(numbers);
}

for(var i=0; i<length; i++){
  var test = Math.floor(Math.random() * choices.length);
 var test2 = choices[test];
  finalChoice.push(test2);
}

console.log(finalChoice.toString());
var stringPass = finalChoice.toString();

var finalPass = stringPass.replace(/,/g, "");
console.log(finalPass);

return finalPass

 }







// Add event listener to generate button


// refers to the clicking of the "writePassword" function

generateBtn.addEventListener("click", writePassword); {



}
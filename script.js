// Assignment Code

var generateBtn = document.querySelector("#generate");

var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lettersL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^']

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var arrays = [numbers, specialCharacters, lettersL, lettersU]

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

function generatePassword(){
  console.log(arrays); }
  //prompts the user for uppercase, lowercase, numeric, and/or special characters 
//let addUpperCase = confirm('would you like to have uppercase letters in the password?');

//let addLowerCase = confirm('would you like to have lowercase letters in the password?');

//let addSpecialCharacters = confirm('would you like to have uppercase letters in the password?');

//let addNumbers = confirm('would you like to have uppercase letters in the password?');

//if (addUpperCase === true) {
  
  //if(addLowerCase === true) {

    //if (addSpecialCharacters === true) {

    //}
  
 // else {
//return (addLowerCase);

  //}
  
  //return ('bruh3');
    
  // }
  // else {

  //return('getbruhed');

 //} 
 // var lowerCase = confirm('would you like to have lowercase letters in the password?');
 

//return "bruh times 2"
  







// Add event listener to generate button


// document.createElement("button");
// generateBtn.innerHTML

// refers to the clicking of the "writePassword" function

generateBtn.addEventListener("click", writePassword);{
  
  
   console.log('bruh');





}
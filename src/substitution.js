// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!input || !alphabet || alphabet.length !== 26 ) return false
      //checking for input, alphabet; and length of alphabet equal to 26 or exiting function
      if(Array.from(new Set(alphabet)).length !== 26) return false;
      //checking for no duplicate letters, if duplicate letter length will be less than 26 and return false
    let abc = "abcdefghijklmnopqrstuvwxyz";
      // created variable for alphabet 
    alphabet = alphabet.split('');
      // splitting into single letter array
    input = input.toLowerCase();
      //eliminating any upper case input
    let toEncode = {};
    let toDecode = {};
    let result = '';
      //created empty variables to store 
    abc.split('').forEach((letter, index) => {
      toEncode[letter] = alphabet[index];
      toDecode[alphabet[index]] = letter;
      // forEach index of abc variable utilize index to match with alphabet
    });
      if(!encode) toEncode = toDecode;
      // if decoding set toDecode to do same as toEncode below 
      input.split('').forEach((input) => {
        //splitting input into single letter array
        result += input === " " ? " " : toEncode[input]
        //for each input letter if space return space otherwise return matching index letter of input
      });
        return result;
  };   

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

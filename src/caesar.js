// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25 ) return false; 
    //if shift qualifies for any above, returns false and exits function
    
  if(!encode) shift *= -1
    //if encode is false (negative number) it will change direction of shift by multipilying shift by negative number
    
    return input.toLowerCase().split('').map((letter) => {
      // input to lowercase, and split up letters, uses map to create array of letters
      
      if(letter.charCodeAt(0) < 97) return letter;
      // if letter character code is less than 97 returns letter uses ASCII table
      
      let num = letter.charCodeAt(0) + parseInt(shift);
      // will add shift to letter
      
      if(num > 122) {
        num = 96 + (num - 122);
        //if letter goes "off" the alphabet wraps back to a
      }
       if(num < 97) {
        num += 26
      }
      //if shift is negative and goes "off" wraps back around
      return String.fromCharCode(num)
    }).join('');
} 


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

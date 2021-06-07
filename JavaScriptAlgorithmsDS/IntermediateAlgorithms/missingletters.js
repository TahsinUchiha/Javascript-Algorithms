function fearNotLetter(str) {
    // construct full alphabet array
    let fullAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
    // given a string, take the first and last of the string - 
    // look for the index of the first and last of the fullalphabet, then slice it 
    let slicedAlphabet = fullAlphabet.split("").slice(fullAlphabet.split("").indexOf(str.split("")[0]),fullAlphabet.split("").indexOf(str.split("")[str.split("").length-1]) + 1)
    console.log(slicedAlphabet)
    // console.log(fullAlphabet.split("").indexOf(str.split("")[str.split("").length-1]) + 1)
  
    // compare the given string and our sliced alphabet array
  
    // create a method/function that finds the difference between the two strings
    // > 1. Iterative, compare for each letter in alphabet, starting from first
    // e.g. abcde ---- abce
    // a == a -- true
    // b == b -- true
    // c == c -- true
    // d == e -- false -- return if(false) => return alphabet value - then splice or push empty space into original string 
    // e == e -- true --- end
    let missingLetters = "";
    str = [...str.split("").sort()];
    // str.splice(8,0, "filler");
    
    for(let i = 0; i < str.length; i++) {
      if(slicedAlphabet[i] != str[i]) {
        missingLetters += slicedAlphabet[i];
        str.splice(i,0, "filler");
        console.log(str)
      } 
    }
    if(missingLetters == "") {
      missingLetters = undefined;
    }
    // then we return that missing letter/char
    return missingLetters;
  }

  /**Alternative Soln */
  function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }
  /**Alternative Soln */
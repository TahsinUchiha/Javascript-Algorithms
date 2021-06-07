// Encrypts/Decrypts ceasars encryption
function rot13(str) {
  const fullAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let encodedString = "";
  // console.log(fullAlphabet.length)
  let alphabetIndex;
  for(let i = 0; i < str.length; i++) {
    alphabetIndex = fullAlphabet.split("").indexOf(str[i]);
    // replace special characters 
    if(alphabetIndex == -1) {
      switch(str.split("")[i]) {
        case " ":
        encodedString += " ";
        break;
        case "!":
        encodedString += "!";
        break;
        case ".":
        encodedString += ".";
        break;
        case "?":
        encodedString += "?";
        break;
      }
      
    } else {
    // adds + 13 to the alphabetIndex - and takes away by 26 if greater
    alphabetIndex += 13;
    if(alphabetIndex >= 26) {
      alphabetIndex -= 26;
    }
    // adds the right alphabet to a new string
    encodedString += fullAlphabet.split("")[alphabetIndex]
    }
  }
  
  return encodedString;
}

console.log(rot13("SERR ZRNY"));
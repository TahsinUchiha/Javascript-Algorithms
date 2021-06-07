function palindrome(str) {
    console.log(str.length)
    // make string to lower case and filter any junk charas/or spaces
    const filterRegex = /\W|\s|\_/g
    str = str.toLowerCase().replace(filterRegex,"")
    console.log(str)
  
    // split up the word into 2 sides
    let firstSide = ""
    let secondSide = ""
    // for odd palindrome, we only check the even sides and leave the middle 
    if(str.length % 2 != 0) {
    for(let i = 0; i < Math.floor(str.length/2); i++) {
      firstSide += str[i];
    }
    // the middle is discounted here 
    for(let i = str.length-1; i > Math.floor(str.length/2); i--) {
      secondSide += str[i]
    }
    }
  
    if(str.length % 2 == 0) {
    // for even sides, we check exactly half of it based on length
    for(let i = 0; i < Math.floor(str.length/2); i++) {
      firstSide += str[i];
    }
    for(let i = str.length-1; i >= Math.floor(str.length/2); i--) {
      secondSide += str[i]
    }
    }
  
    console.log(firstSide)
    console.log(secondSide)
    // finally we compare if both sides are the same, and equate true 
    if(firstSide == secondSide) {
     console.log(str.length)
      return true;
    } else {
      return false;
    }
  
  }
  
  
  
  
  console.log(palindrome("zzadsasdsad"));
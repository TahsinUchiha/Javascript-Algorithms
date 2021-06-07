function telephoneCheck(str) {
    // validate using regex method
    let newStr;
    // split into country code, area number, general number
    let phoneRegex = /1{0,1}(\-{0,1}|\s{0,1}|\({0,1})(\({0,1})\d\d\d(\){0,1})(\-{0,1}|\s{0,1}|\){0,1})\d\d\d(\-{0,1}|\s{0,1})\d\d\d\d/g
  
    // fail if general regex doesn't match 
    if(!phoneRegex.test(str)) {
      return false;
    }
    // make a new string with matched regex
    let matchedStr
    matchedStr = str.match(phoneRegex).join("");
   
    
    newStr = str.replace(/\W/g,"") // reduce spaces/additional - to just numbers
    const openBracket = "(";
    const closingBracket = ")";
  
    let openCount = 0;
    let closingCount = 0;
  
    if(matchedStr.includes(openBracket)|matchedStr.includes(closingBracket)) {
      matchedStr.split("").forEach((element) => {
        if(element == openBracket) {
          openCount++;
        } 
        if(element == closingBracket) {
          closingCount++;
        }
      })
    }
  
    if(openCount != closingCount) {
      return false;
    }
    console.log(newStr)
    // if it doesn't start with 1, we fail
    if((newStr.length == 11 && str.startsWith("1"|1))|newStr.length == 10) {
      return phoneRegex.test(str)
    } else {
      return false;
    }
  }
  
  console.log(telephoneCheck("2 (757) 622-7382"));
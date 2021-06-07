function translatePigLatin(str) {
  let vowels = ['a','e','i','o','u'];

  let strArr = [...str.split("")];
  let tempArr = [...str.split("")]
  let newArr = [];
  // console.log(strArr[0])

  let i = 0;
 
  
    
  while(!vowels.includes(strArr[i].toLowerCase())) {
    
    // console.log(strArr.length-1)
    console.log(i)
    newArr.push(strArr[i]);
    tempArr.splice(tempArr.indexOf(strArr[i]),1)
    if(i <= strArr.length-2) {
    i++;
    } else {
    break;
    }
}

  if(newArr.length != 0) {
    newArr.push("ay");
    str = tempArr.concat(newArr).join("");
  } else {
    newArr.push("way");
    str = tempArr.concat(newArr).join("");
  }
  console.log(newArr)

  return str;
}

/**Alternative Soln */
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");
/**Alternative Soln */

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}
/**Alternative Soln */
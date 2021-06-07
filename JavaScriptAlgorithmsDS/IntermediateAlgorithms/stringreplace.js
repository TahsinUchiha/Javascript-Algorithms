function myReplace(str, before, after) {
    console.log(before.split("")[0].toUpperCase())
    if(before.startsWith(before.split("")[0].toUpperCase()))  {
      after = after.replace(after.split("")[0], after.split("")[0].toUpperCase())
    } else if(before.startsWith(before.split("")[0].toLowerCase())) {
      after = after.replace(after.split("")[0], after.split("")[0].toLowerCase())
    }
    return str.replace(before,after);
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"));


  /**Alternative Solution */
  function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  /**Alternative Solution */
function myReplace(str, before, after) {
  const myArr = str.split(" ");
  const [wordToReplace] = myArr.filter(item => item === before);
  return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map(item => (item === before ? after : item)).join(" ")
    : myArr
        .map(item =>
          item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}

// test:
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  /**Alternative Solution */

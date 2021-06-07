// purpose of this function is to replace any given string, of some cases - and let it be joined with dashes
function spinalCase(str) {

let regex = new RegExp(/\w/)
    // first we split the string for any dashes/empty spaces/dots/underscores then join them into one
   str = str.split(/\d|""|\.|_/).join("");
   console.log(str)
    let newStr = [];
    // we look for capitalisation then split them accordingly by pushing it into an array 
    for(let i = 0; i< str.split("").length; i++) {
        // we only look for strings that match an alphabet 
      if(str.split("")[i].toUpperCase() == str.split("")[i] && regex.test(str.split("")[i])) {
          newStr.push(" ")
          newStr.push(str.split("")[i])
        } else {
          newStr.push(str.split("")[i])
        }
    }
    // then we trim for any additional spaces/ and replace spaces that are more than 2+ with a single space
    str = newStr.join("").trim().replace(/\s{2,}/g, " ");
    
    // then we join the string for all cases 
    return str.toLowerCase().split(/\d|""|\s|\.|_|-/).join("-");
  }
  
  console.log( "final case: " +
    spinalCase("This Is Spinal Tap"));
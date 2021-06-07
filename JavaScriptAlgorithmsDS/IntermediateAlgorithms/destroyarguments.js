// Hint 1
// You need to work with arguments as if it was a regular array. The best way is to convert it into one.

// Hint 2
// You may want to use use various methods like: indexOf(), includes(), or filter(). When in doubt about any function, check those docs!
function destroyer(arr) {
    let newArr = [];
    let filteredArr = [];
    for(let i = 1; i < arguments.length; i++) {
      newArr.push(arguments[i])
    }
    arr.forEach((e) => {if(!newArr.includes(e)) {
     filteredArr.push(e);
    }})
  
    return filteredArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
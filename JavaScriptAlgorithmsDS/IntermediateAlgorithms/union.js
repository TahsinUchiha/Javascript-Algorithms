/**Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */

function uniteUnique(arr) {
    // javascript arguments
    let newArr = [];
    // nested loop to look inside arguments, then return a new array if each of those numbers are not included in newArr
    for(let i = 0; i < arguments.length; i++) {
      for(let j = 0; j < arguments[i].length; j++) {
        if(!newArr.includes(arguments[i][j])) {
          newArr.push(arguments[i][j])
        }
      }
    }

    return newArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
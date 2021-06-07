 // finding the longest word 
//efficient methods; using .reduce() 

function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
  }
// efficient method: .map() and Math.max 

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }


// Finding largest nested loop values #
//mysolution
function largestOfFour(arr) {
  let newArr = []
  const MIN_VAL = -324324243  
  for(let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
       let tempNum = MIN_VAL;
    for(let j = 0; j < arr[i].length; j++) {

      if(arr[i][j] > tempNum) {
        tempNum = arr[i][j];
      }
     
    }
    newArr.push(tempNum);
  }
  return newArr;
}
// alternative solution
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
// Declarative approach

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
// recursive approach
function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

// # Confirm the ending 

function confirmEnding(str, target) {
  // split target into array 
  target = target.split("");
  str = str.split("");
  let comparisonArr = []
  for(let i = str.length-1; i > str.length-1-target.length; i-- ) {
    comparisonArr.push(str[i])
  }
  comparisonArr.reverse();
  console.log(comparisonArr);
  console.log(target);
  return comparisonArr.join("") == target.join("");
}

console.log(confirmEnding("Bastian", "an"));

// declarative approach

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

// regex approach 

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

// normal ending

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

// uses .filter() method
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

// mutations, returns true if the first element of an array contains all the letters of the string in the second array

function mutation(arr) {
  let firstString = arr[0].toLowerCase().split("").sort();
  let secondString = arr[1].toLowerCase().split("").sort();
  let comparisonArr = []
  for(let i = 0; i < secondString.length; i++) {
    console.log(secondString[i]);
    if(firstString.includes(secondString[i])) {
      comparisonArr.push(secondString[i]);
    }
  }
  return comparisonArr.join("") == secondString.join("");
}

// chunking an array based on the size given

function chunkArrayInGroups(arr, size) {
  let oldArr = [...arr];
  let newArr = []
  // in order to break this problem down,
  // first we consider an example case and we use methods to get our test specific result
  // 1st Approach
  // join the arr into a string
  // split the string into chunks from its size
  let string1 = oldArr.join("").split("",size)
  oldArr.splice(0,size)
  newArr.push(string1);
  let string2 = oldArr.join("").split("",size)
  newArr.push(string2);
  // in the above, we created a string,
  // spliced our arr, from 0 to max-size of chunk ,
  // pushed the string into our newArr
  // to automate this as a generic we can do a while loop to check if arr.length >= size
  let copyArr = [...arr];
  let testArr = [];
  while(copyArr.length >= size) {
    let startingIndex = 0;
    let tempString = copyArr.splice(startingIndex,size);
    //copyArr.join("").split("",size);
    testArr.push(tempString);
    if(copyArr.length < size && copyArr.length != 0) {
    let tempString = copyArr;
    testArr.push(tempString);
    }
  }
  
  return testArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));



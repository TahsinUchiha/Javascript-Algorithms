function addTogether() {
    /**It has to add two numbers passed as parameters and return the sum.
  
  It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
  
  It has to check if it has one or two arguments passed. More are ignored.
  
  If it has only one argument then it has to return a function that uses that number and expects another one, to then add it. */
  let x = arguments[0];
  if(arguments.length == 1 && typeof arguments[0] == 'number') {
    return function(y) {
      if(typeof y == 'number') {
        return  x + y;
      } else {
        return undefined
      }
      
    }
  }
  const sumArr = []
    for(let i = 0; i< arguments.length; i++) {
      // console.log(typeof arguments[i])
      if(typeof arguments[i] == 'number') {
        if(arguments.length > 1) {
          sumArr.push(arguments[i]);
        }
      } else {
        return undefined
      }
    }
    return sumArr.reduce((a,b) => a + b);
    // return arguments
  
}
/**Alternative Solution */
//jshint esversion: 6
function addTogether() {
    var args = Array.from(arguments);
    return args.some(n => typeof n !== "number")
      ? undefined
      : args.length > 1
      ? args.reduce((acc, n) => (acc += n), 0)
      : n => (typeof n === "number" ? n + args[0] : undefined);
  }
  
  // test here
  addTogether(2, 3);
/**Alternative Solution */
function addTogether() {
    const [first, second] = Object.values(arguments);
    // Check first argument
    if (typeof first !== "number") {
      return undefined;
    }
  
    // Function to add second argument
    const addSecond = (second) => typeof second === "number" ? first + second : undefined;
  
    // Check second argument
    if (second !== undefined) {
      return addSecond(second);
    } else {
      return addSecond
    }
  }
  
  // test here
  addTogether(2, 3);
/**Alternative Solution */
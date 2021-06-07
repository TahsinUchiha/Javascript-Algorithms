// old style 
var magic =  function() {
    return new Date;
}

// new style
// declaring functions
const magic = () => new Date; 

// args, as rest parameter ---- //rest operator

const sum = (...args) => args.reduce((a,b) => a + b, 0);

console.log(sum(1,2,3));

// find maximum value in an array using apply()
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

// using math.max and ...arr we able to do the same 
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// spread operator 

arr1 = ["hello", 2]
let arr2;

// return arr1
//NOTE: spread operator only copies first level - this DOES NOT WORK FOR MULTI-DIMENSIONAL ARRAY
arr2 = [...arr1];

// destructuring assignment 


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // this is equivalent to 
  const {today, tomorrow} = HIGH_TEMPERATURES;

  // this es5 code below 
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;

  // assiging new variable name - es6 
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;  

// old es5
  const highToday = HIGH_TEMPERATURES.today;
  const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

  // destructuring a list
  const source = [1,2,3,4];

  // removes the first 2, then prints the rest - this is similar to array.slice
  const [,, ...arr] = source;

  console.log(arr);

  // can pass on object as a function without declaring
  const stats = {
    max: 10,
    min: 2
  }

  const half =  ({max,min}) => (max + min)/2;

  //Note
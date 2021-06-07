//array functions 
//- .push()    // pushes to the end   -----Opposite------ .pop()   // removes from the end
//- .unshift() // pushes to the front -----Opposite------ .shift() // removes from the beginning
//- .splice(startIndex, amountToDelete, "stuff", "to", "add") // modifies an array based on index 
//- .slice(startIndex, lastIndex) // copies an array based on index 
// spread operator allows you to copy an entire array,
// arr = [1,2,3] 
// newArr = [...arr] console.log(newArr) = [1,2,3]
// return condition ? exprIfTrue : exprIfFalse 
// forEach((element) => { ... } )
// map((element) => { ... } ) .map(element => (some operation on every element))

// at its elementary form; map looks like
// e.g you have 
var s = [1,2,3];
var new_s = s.map(function(item) {
    return item * 2;
  });


// array.prototype.map takes a function as in input and returns an array. The returned array includes elements that is processed by the function. This function takes individual elements as input.
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names);

// [ 'John', 'Amy', 'camperCat' ].

// for a list of movies/watchlist we can represent the same for loop using map
var ratings = [];
for(var i=0; i < watchList.length; i++){
  ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}
// the above can be represented the same way using map
var ratings = watchList.map(movies => 
    movies = {title: movies.Title, 
    rating: movies.imdbRating})

// implementing map function using forEach
// here, callback is a function; 
// map effectively acts like forEach method; but pushes a functional implementation
Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Only change code below this line
    this.forEach(e => newArray.push(callback(e)))
    // Only change code above this line
    return newArray;
  };

//recall : map((element) => { ... } ) .map(element => (some operation on every element))
// at its elementary form; map looks like
// e.g you have 
var s = [1,2,3];
var new_s = s.map(function(item) {
    return item * 2;
  });

// implementing the /filter method

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  // for loop method
  for(var i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      newArray.push(this[i])
    }
  }
  // for each method
  this.forEach(x => {if(callback(x)) {
    newArray.push(x);
  }})
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s)

// .reduce function 
// using instances of filter and reduce
function getRating(watchList){
  

  // filter movies based on name
  let filteredMovies = watchList.filter((movies) => movies["Director"] == "Christopher Nolan");
  let numberOfMovies = filteredMovies.length; 
  // using reduce function; get average rating
  let totalRating = filteredMovies.reduce((accumilator, movies) => 
        accumilator + (Math.round(movies["imdbRating"]*100)/100)/numberOfMovies,0);

    
  console.log(totalRating);
  return totalRating;
}

getRating(watchList);

// using map/filter or reduce to solve problems

const squareList = arr => {
  // Only change code below this line
  let filteredArr = arr.filter((x) => x > 0 && x == Math.floor(x))
  let squaredVal = filteredArr.map((x) => Math.pow(x,2))
  return squaredVal;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

// sort method for numbers/alphabets 
// in ascending
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// in reverse
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);

// non mutating sort array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return arr.slice(0, arr.length).sort((a,b) => a - b)

  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));

// splitting words based on regex 

function splitify(str) {
  // Only change code below this line
  return str.split(/\s|,|-|\./)

  // Only change code above this line
}
splitify("Hello World,I-am code");

// joining words on regex

function sentensify(str) {
  // Only change code below this line

return str.split(/\s|,|-|\./).join(" ")
  // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));

// filter title 
// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().split(" ").filter((x) => x != "").join("-")

}
// Only change code above this line

console.log(urlSlug(" Winter Is  Coming"));

// alternative

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

// using every method - returns true if every element meets criteria

function checkPositive(arr) {
  // Only change code below this line

return arr.every((x) => x > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// the some method - returns true if some elements meet criteria
function checkPositive(arr) {
  // Only change code below this line
  return arr.some((x) => x > 0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// arity of a function is the number of arguments it requires; currying a function means to convert a function of 
// N arity into N functions of arity 1.

// example
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
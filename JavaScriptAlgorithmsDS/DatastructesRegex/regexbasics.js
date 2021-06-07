//ignore uppercase/lowercase
// using the "i" ignores cases
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

// using "g" = you can extract multiple matches 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

// wildcard . --> to match "un" character of any character
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

// [] <-- these will match all inside brackets

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// [a-z0-9] --> match all characters
// ^ to negate match
// negates all vowels and numbers
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// + will match the numbero f times a character is repeated
// this matches two items in an array, [ss,ss] - since s is seperated by i 
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

  //password validator
  const phoneValidator = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/;

// Positive and negative look aheads
let negLook = /q(?!u)/ // a q not followed by a u
let posLook = /q(?=u)/ // a q followed by a u

// make quantifiers less greedy with ?
let nongreed = /x+?/ // here it will stop once it has found a single match of x +

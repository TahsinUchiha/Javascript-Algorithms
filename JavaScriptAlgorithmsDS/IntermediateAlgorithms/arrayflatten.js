// Global Variable Solution
let newArr = []
function steamrollArray(arr) {
    
  arr.forEach((e) => {
    if(!Array.isArray(e)){
        newArr.push(e);
        ;
    } else {
        return steamrollArray(e)
    }

      
})
return newArr;
  }     
  //[1, [2], [3, [[4]]]]
console.log(steamrollArray([1, {}, [3, [[4]]]]));

/** Non - Global */
function steamrollArray(arr) {
    let newArr = []
    const isArray = (arr) => { 
          arr.forEach((e) => {
        if(!Array.isArray(e)){
            newArr.push(e);
        } else {
            return isArray(e)  
        }
         })
      
      }
    isArray(arr);
    return newArr;
}     

/** Alternative Solution */
function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  
  // test here
  steamrollArray([1, [2], [3, [[4]]]]);
/** Alternative Solution */
function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
/** Alternative Solution */
function steamrollArray(val,flatArr=[]) {
    val.forEach(item => {
      if (Array.isArray(item)) steamrollArray(item, flatArr);
      else flatArr.push(item);
    });
    return flatArr;
  }
/** Alternative Solution */
function steamrollArray(arr) {
    return arr
      .toString()
      .replace(",,", ",") // "1,2,,3" => "1,2,3"
      .split(",") // ['1','2','3']
      .map(function(v) {
        if (v == "[object Object]") {
          // bring back empty objects
          return {};
        } else if (isNaN(v)) {
          // if not a number (string)
          return v;
        } else {
          return parseInt(v); // if a number in a string, convert it
        }
      });
  }
/** Alternative Solution */
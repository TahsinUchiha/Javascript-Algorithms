// Trick to filtering duplicates
// const unique = [...new Set(arr)]
// unique.filter((index,item) => arr.indexOf(item) == index);
// unique.reduce((unique,item) => 
// unique.includes(item) ? unique : [...unique,item],[]);
//

// this function looks through a collection of objects; and filters any object with matching key + value and returns the full object in the collection that matches source
function whatIsInAName(collection, source) {
    
    var arr = [];
    // first we iterate over each object in the collection 
    collection.forEach((obj) => {
       for(let k in obj) {
           // if the value of the object + key matches source and if the Object from Collection boasts equal to - or more number of objects than source, we push the object into a new array.
          if(obj[k] == source[k] && source.hasOwnProperty(k) && Object.keys(obj).length >= Object.keys(source).length)  {  
           arr.push(obj)
          } 
        }
      })

      // since previously we iterated over each item in the object; we will get duplicate matching; this will filter out any duplicates 
      arr = arr.filter((value,index) => arr.indexOf(value) == index);

      // now we look at our new array, and compare if the ones with the same size as the source matches every key/value in the source
      for(let i = 0; i < arr.length; i++) {
          if(Object.keys(source).length == Object.keys(arr[i]).length) {
              for(k in source) {
                  // if any non-matches are found; it is immediately removed from the array 
                  if(arr[i][k] != source[k]) {
                      arr.splice(i,1);
                      break;
                  }
              }
          }
      }
      return arr
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

 
 
 
 /** ------------------------------------------------------------------------------------------------------------------------------------------ */
 
  /**Alternative Solutions */

  function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      for (var i = 0; i < srcKeys.length; i++) {
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
  }  

  /**Alternative Solutions */
  function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {
      return srcKeys
        .map(function(key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
        .reduce(function(a, b) {
          return a && b;
        });
    });
  }

  /**Alternative Solutions */
  function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    return collection.filter(function(obj) {
      return srcKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
}
  /**Alternative Solutions */
   
 /** ------------------------------------------------------------------------------------------------------------------------------------------ */
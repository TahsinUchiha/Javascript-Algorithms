function truthCheck(collection, pre) {
    // hasOwnProperty()
    // iterate through each object in collection array; check if it hasOwnProperty(pre) and Boolean(property)
    // e is an object
  let objectChecker = []
    collection.forEach((e) => {
      if(e.hasOwnProperty(pre) && Boolean(e[pre])) {
        objectChecker.push(e[pre]);
        // truthfinder =  "true";
      } 
    })
    return objectChecker.length == collection.length;
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
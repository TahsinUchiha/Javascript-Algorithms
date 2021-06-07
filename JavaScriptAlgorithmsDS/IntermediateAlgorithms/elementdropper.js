// drops elements as soon as function returns true
function dropElements(arr, func) {
    for(let i = 0; i<arr.length; i++) {
      if(func(arr[i])){
        break;
      }else {
        console.log(i)
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  }
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
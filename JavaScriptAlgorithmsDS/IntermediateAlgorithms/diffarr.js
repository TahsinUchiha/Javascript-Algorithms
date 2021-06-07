function diffArray(arr1, arr2) {
    // returns the differences in the 2 arrays passed 
      var newArr = [];
      arr1.forEach((e) => {if(!arr2.includes(e)) {newArr.push(e);}});
      arr2.forEach((e) => {if(!arr1.includes(e)) {newArr.push(e);}});
    
      return newArr;
    }

    console.log(diffArray([1,2,3],[1,2,4]))
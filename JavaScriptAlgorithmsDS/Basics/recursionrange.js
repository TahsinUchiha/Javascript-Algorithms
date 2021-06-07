function countUp(num) {
    // base case
    if(num < 1) {
        return []
    }

    else {

    const countArray = countUp(num-1);
    countArray.push(num);
    return countArray;

    }
    
}

console.log(countUp(56))


function rangeOfNumbers(startNum, endNum) {
    //base case
    if(endNum == startNum) {
      return [startNum];
    }
    // recursive case 
    else {
      const constArray = rangeOfNumbers(startNum, endNum - 1);
      constArray.push(endNum);
      return constArray;
  
    }
  
  
  };
  
  console.log(rangeOfNumbers(2,3))
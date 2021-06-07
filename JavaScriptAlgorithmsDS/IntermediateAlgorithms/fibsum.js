// sums odd fibonachi numbers
function sumFibs(num) {
    // sum odd fibonachi numbs 
    // fibonachi nums
  let previous = 1
  let current = 1;
  let sum = previous;
  let fibArr =[sum]
  let fibOddArr = []
  let oddSum = 1;
    for(let i = 0; sum <= num; i++) {
      if(sum % 2 != 0) {
        // console.log(sum)
        // console.log(sum % 2 != 0)
        oddSum += sum;
        fibOddArr.push(oddSum);
      }
      fibArr.push(sum);
      sum = previous + current;
      previous = current;
      current = sum;
  
    }
    console.log(fibArr)
    console.log(fibOddArr)
    return oddSum;
  }
  
  console.log(sumFibs(75025));

/**Alternate Solution */
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);
/**Alternate Solution */
function sumAll(arr) {
    let newArr = arr.slice(0,arr.length);
    newArr = newArr.sort((a,b) => a - b)
    let sumArr = [...arr];
    for(let i = 0; i < newArr[newArr.length-1]; i++) {
      if(i > newArr[0] && i < newArr[newArr.length-1]) {
        console.log(i);
        sumArr.push(i);
      }
    }
    console.log(newArr)
    return sumArr.reduce((a,b) => a + b);
  }
  console.log( 3 > 1 && 3 < 4)
  console.log(sumAll([4, 1]));

  /**Alternative Solution */
  function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);
  /**Alternative Solution */
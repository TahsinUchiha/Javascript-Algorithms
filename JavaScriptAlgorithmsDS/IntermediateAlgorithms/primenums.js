function sumPrimes(num) {
    // loop through all prime numbers
    let primeArr = [];
    for(let i = 2; i <= num; i++) {
      // push all numbers; we can splice any numbers that divide inbetween  
      primeArr.push(i);
      for(let j = 1; j < i; j++) {
        if(i % (j + 1) == 0 && j != i && (j+1) != i) { 
          primeArr.splice(primeArr.indexOf(i),1)
          break;
    }
      }
    }
    console.log(primeArr)
    return primeArr.reduce((a,b) => a + b);
  }
  
  console.log(sumPrimes(10));

  /**Alternative Solution */
//   function sumPrimes(num) {
//     // Check all numbers for primality
//     let primes = [];
//     for (let i = 2; i <= num; i++) {
//       if (primes.every((prime) => i % prime !== 0))
//         primes.push(i);
//     }
//     return primes.reduce((sum, prime) => sum + prime, 0);
//   }
  /**Alternative Solution */

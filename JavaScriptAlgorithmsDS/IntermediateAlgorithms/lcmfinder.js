function smallestCommons(arr) {
    // lcm range from smallest to biggest
    let initial = arr[0];
    let final = arr[1];
    if(arr[0] > arr[1]) {
      initial = arr[1];
      final = arr[0];
    }
   
    let incrementer = initial;
    let lcm = initial;
    while(incrementer <= final) {
      if(lcm % incrementer != 0) {
        for(let i = 1; i <= incrementer; i++) {
          if(lcm * i % incrementer == 0) {
            lcm = lcm * i;
            break;
          }
        }
      }
      incrementer++;
    }
    return lcm;
    
  }
  
  
  console.log(smallestCommons([1,5]));

  /**Alternatives */
  function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // GCD of two numbers
    // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    // LCM of two numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
    const lcm = (a, b) => a * b / gcd(a, b);
    // LCM of multiple numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Other
    return range.reduce((multiple, curr) => lcm(multiple, curr));
  }
  
  smallestCommons([1, 5]);
  /**Alternatives */
  function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      const divisible = range.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
    }
  }
  
  smallestCommons([1, 5]);
  /**Alternatives */
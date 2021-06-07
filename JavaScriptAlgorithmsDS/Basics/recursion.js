function multiply(arr, n) {
    if(n <= 1) {
        return 1;
    }
    // 1 x 2 x 3 x 4 x 5
    else {
        
        multiply(arr, n-1) * arr[n-1];
    }

}

function sum(arr, n) {
    if(n<=0) {
        return 0;
    } else {
        sum(arr, n-1) + arr[n-1];
    }
}

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

function factorial(number) {
    if(number == 1) {
        return 1;
    }

    return number * factorial(number - 1);
}


console.log(factorial(100));

function fibonachi(number) {
    if (number == 1 || number == 2) {
        return 1;
    }

    return fibonachi(number - 2) + fibonachi(number - 1);
}

// console.log(fibonachi(2));
var number = 1;
while (number < 10) {
    console.log(fibonachi(number));
    number++;
}



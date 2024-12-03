//String reversal

function stringreverse(str){
    return str.split('').reverse().join('');
}

//Count Characters

function countChar(str){
    return str.length;
}

//Capitalize Words

function capitalWOrds(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slide(1)).join(' ');
}

//Max and Min
function findMax(arr) {
    return Math.max(...arr);
}

// Example usage
// const numbers = [3, 9, 5, 1, 7];
// console.log(findMax(numbers));


function findMin(arr) {
    return Math.min(...arr);
}
//example
// const num = [2,6,3,8,4];
// console.log(findMin(num));

//Sum 
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
// const number = [3,6,3,13,8];
// console.log(sumArray(number));

// Filter 
function filterArray(arr, condition) {
    return arr.filter(condition);
}
// const numb = [3,6,8,7,1];
// const isEven = numb => numb % 2 === 0;
// const filternum = filterArray(numb,isEven);
// console.log(filternum);


//Factorial
function factor(n) {
    if (n === 0) return 1;
    return n * factor(n - 1);
}
// let number = 5;
// let result = factor(number);
// console.log( `The factorial of the ${number} is ${result}`);



//Prime Number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// let number = 17;
// let isPrimeNum =isPrime(number);

// console.log(`${number} is prime: ${isPrimeNum}`);


//Fibonacci
function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// let num = 10;
// let fibSeq = fibonacci(num);

// console.log(fibSeq);
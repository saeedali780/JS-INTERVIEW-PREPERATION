// Question 1 — Print Your Information
// 1. Variables

// Create three variables:
// name
// age
// country
// Print them in a meaningful sentence.

// const name = "Saeed Ali";
// const age = 18;
// const city = "Karachi";

// console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`);

// Q 2. Even or Odd

// Write a function:
// isEven(num)
// Return true if the number is even, otherwise false.

// function isEven(num){
//     if(num % 2 ===0){
//         return "Even: " +  num;
//     }else{
//         return "Odd: " + num;
//     }
// }
// console.log(isEven(4)); // Output: Even: 4

// Q 3. Largest Number
// Write a function:
// findLargest(a, b)
// Return the larger number.

// function findLargest(a, b){
//     if(a > b){
//         return "Largest Number is: " + a;
//     }
//     return "Largest Number is: " + b;
// }
// console.log(findLargest(10, 20)); // Output: Largest Number is: 20

// Q 4. Sum from 1 to N

function sumToN(n){
    let sum = 0;

    for(let i = 1; i<= n;i++){
        sum += i;
    };
    return sum;
}
console.log(sumToN(29));

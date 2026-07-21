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

function isEven(num){
    if(num % 2 ===0){
        return "Even: " +  num;
    }else{
        return "Odd: " + num;
    }
}
console.log(isEven(4)); // Output: Even: 4
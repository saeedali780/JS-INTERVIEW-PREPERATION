//Guess What will be the output?
// myFunc()
// var  myFunc = function() {
//     console.log("First");
// }
// myFunc()

// function myFunc(){
//     console.log("Second");
// }
// myFunc()

// QUESTION 1. What is function decelaration and function expression in JavaScript? 

// ANSWER:
// Function Declaration: A function declaration defines a named function using the function
// keyword followed by the function name and parentheses. Function declarations are hoisted, 
// meaning they can be called before they are defined in the code.

// Example of Function Declaration:
// function greet() {
//     console.log("Hello, World!");
// }
// greet(); // Output: Hello, World!

// Function Expression: A function expression defines a function as part of a larger expression, 
// typically by assigning it to a variable. Function expressions are not hoisted, so they cannot 
// be called before they are defined.
// Example of Function Expression:
// var sayGoodbye = function() {
//     console.log("Goodbye, World!");
// };
// sayGoodbye(); // Output: Goodbye, World!

// QUESTION 2. What are first-class functions in JavaScript?

// ANSWER:
// First-class functions in JavaScript mean that functions are treated as first-class citizens.
// This implies that functions can be:
// 1. Assigned to variables
// 2. Passed as arguments to other functions
// 3. Returned from other functions
// 4. Stored in data structures like arrays or objects

// Example of First-class functions:
// Assigning a function to a variable
// var add = function(a, b) {
//     return a + b;
// };
// console.log(add(2, 3)); // Output: 5

// Passing a function as an argument
// function operate(a, b, operation) {
//     return operation(a, b);
// }
// console.log(operate(5, 3, add)); // Output: 8

// Returning a function from another function
// function createMultiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }
// var double = createMultiplier(2);
// console.log(double(4)); // Output: 8


// Storing functions in an array
// var functionsArray = [
//     function() { return "Function 1"; },
//     function() { return "Function 2"; }
// ];
// console.log(functionsArray[0]()); // Output: Function 1
// console.log(functionsArray[1]()); // Output: Function 2


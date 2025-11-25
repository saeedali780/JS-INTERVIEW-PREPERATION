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
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// Function Expression: A function expression defines a function as part of a larger expression, 
// typically by assigning it to a variable. Function expressions are not hoisted, so they cannot 
// be called before they are defined.
// Example of Function Expression:
var sayGoodbye = function() {
    console.log("Goodbye, World!");
};
sayGoodbye(); // Output: Goodbye, World!
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

// QUESTION 3. What is IIFE function in JavaScript?

// ANSWER:
// IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that 
// is defined and executed immediately after its creation. IIFEs are commonly used to create 
// a private scope for variables and functions, preventing them from polluting the global scope.

// Example of IIFE:
// (function() {
//     var privateVariable = "I am private";
//     console.log(privateVariable); // Output: I am private
// })();

// In this example, the function is defined within parentheses and is immediately invoked 
// using the trailing parentheses. The variable privateVariable is not accessible outside 
// the IIFE, thus maintaining a clean global scope.

// QUESTION 4. Function hoisting in JavaScript?

// ANSWER:
// Function hoisting in JavaScript refers to the behavior where function declarations are 
// moved to the top of their containing scope during the compilation phase. This means that 
// you can call a function before it is defined in the code.

// Example of Function Hoisting:
// greet(); // Output: Hello, World!
// function greet() {
//     console.log("Hello, World!");
// }

// In this example, the function greet is called before its declaration, but it still works 
// because of hoisting.

// QUESTION 5. Params vs Arguments in JavaScript?

// ANSWER:
// Parameters and arguments are related concepts in JavaScript functions, but they refer to 
// different things:
// Parameters: Parameters are the named variables that are defined in a function's declaration. 
// They act as placeholders for the values that will be passed to the function when it is called.
// // Example of Parameters:
// function add(a, b) { // a and b are parameters
//     return a + b;
// }
// // Arguments: Arguments are the actual values that are passed to a function when it is called.
// // These values correspond to the parameters defined in the function declaration.
// // Example of Arguments:
// var result = add(2, 3); // 2 and 3 are arguments
// console.log(result); // Output: 5

// spread operator & rest operator in functions

// function myFunc(a,...args){ // rest operator
//     console.log(a,args);
// }
// myFunc(1,2,3,4,5)

// function myFunc2(a,b,c){
//     console.log(a,b,c);
// }
// var arr = [1,2,3]
// myFunc2(...arr) // spread operator

// QUESTION 6. What is callback function in JavaScript?

// ANSWER:
// A callback function in JavaScript is a function that is passed as an argument to another
// function and is executed after some operation or event occurs. Callback functions are commonly
// used for asynchronous operations, such as handling events, making API calls, or performing 
// tasks that take time to complete.

// Example of Callback Function:
// function fetchData(callback) {
//     setTimeout(function() {
//         var data = "Sample Data";
//         callback(data); // Execute the callback function with the fetched data
//     }, 2000); // Simulating a delay of 2 seconds
// }
// fetchData(function(data) {
//     console.log("Data received:", data); // Output: Data received: Sample Data
// });

// function greet(name){
//     return function(message){
//         console.log(`Hello ${name}, ${message}`);
//     }
// }
// // var greetJohn = greet("Saeed");
// // greetJohn("Welcome to the team!"); // Output: Hello Saeed, Welcome to the team!

// greet("Alice")("Good to see you!"); // Output: Hello Alice, Good to see you!

// QUESTION 7. What is the difference between arrow function and regular function in JavaScript?

// ANSWER:
// Arrow functions and regular functions in JavaScript have several key differences:
// 1. Syntax: Arrow functions have a more concise syntax compared to regular functions.
// Example of Arrow Function:
// const add = (a, b) => a + b;
// // Example of Regular Function:
// function add(a, b) {
//     return a + b;
// }
// 2. 'this' Binding: Arrow functions do not have their own 'this' context. Instead, they
// inherit 'this' from the surrounding lexical scope. Regular functions have their own 'this'
// context, which can change based on how the function is called.
// Example:
// const obj = {
//     value: 42,
//     regularFunction: function() {
//         console.log(this.value); // 'this' refers to obj
//     },
//     arrowFunction: () => {
//         console.log(this.value); // 'this' does not refer to obj
//     }
// };
// obj.regularFunction(); // Output: 42
// obj.arrowFunction(); // Output: undefined (or error in strict mode)
// // 3. 'arguments' Object: Regular functions have access to the 'arguments' object, which
// // contains all the arguments passed to the function. Arrow functions do not have their own
// // 'arguments' object.
// // Example: 
// function regularFunc() {
//     console.log(arguments); // Accessible
// }
// const arrowFunc = () => {
//     console.log(arguments); // Not accessible
// }
// regularFunc(1, 2, 3); // Output: [1, 2, 3]
// arrowFunc(1, 2, 3); // Output: ReferenceError: arguments is not defined
// 4. Constructor: Regular functions can be used as constructors with the 'new' keyword,
// while arrow functions cannot be used as constructors and will throw an error if used
// with 'new'.
// Example:
// function RegularConstructor() {
//     this.value = 100;
// }
// const ArrowConstructor = () => {
//     this.value = 100;
// }
// const obj1 = new RegularConstructor(); // Works
// console.log(obj1.value);
// const obj2 = new ArrowConstructor(); // TypeError: ArrowConstructor is not a constructor
// console.log(obj2.value);

// QUESTION 8. What is the purpose of the 'return' statement in a function?

// ANSWER:
// The 'return' statement in a function is used to specify the value that the function
// should output when it is called. When a function reaches a 'return' statement, it
// immediately exits the function and sends the specified value back to the caller.
// If no 'return' statement is present, the function will return 'undefined' by default.

// Example of 'return' statement:
// function multiply(a, b) {
//     return a * b; // The function returns the product of a and b
// }
// console.log(multiply(3, 4)); // Output: 12

// In this example, the 'multiply' function takes two parameters 'a' and 'b', calculates
// their product, and returns the result. When the function is called with arguments 3 and 4,
// it outputs 12.
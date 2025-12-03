// Clouser in JavaScript

// A closure is a function that retains access to its lexical scope,
// even when the function is executed outside that scope.

// Lexical scope example
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }
    return innerFunction; // Returning the inner function
}

const closure = outerFunction(); // Create a closure
closure(); // Outputs: I am from the outer function

// Practical example of closure
function makeCounter() {
    let count = 0; // Private variable
    return function() {
        count += 1;
        return count; // Accessing and modifying the private variable
    };
}
const counter = makeCounter(); // Create a counter closure
console.log(counter());
console.log(counter());
console.log(counter()); // Outputs: 1, 2, 3


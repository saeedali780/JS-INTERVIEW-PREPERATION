// scopeChain.js

// Scope chaining in JavaScript refers to the hierarchical structure of scopes
//  that determines how variable names are resolved in nested functions and blocks.
//  When a variable is accessed, JavaScript first looks for it in the current scope.
//  If it doesn't find it there, it moves up to the next outer scope, continuing this 
// process until it either finds the variable or reaches the global scope.

// Example to illustrate scope chaining
var globalVar = 'I am a global variable';
function outerFunction() {
    let outerVar = 'I am from the outer function';
    function innerFunction() {
        let innerVar = 'I am from the inner function';
        console.log(innerVar); // Accessible: 'I am from the inner function'
        console.log(outerVar); // Accessible: 'I am from the outer function'
        console.log(globalVar); // Accessible: 'I am a global variable'
    }
    innerFunction();
    // console.log(innerVar); // Unaccessible: ReferenceError
    console.log(globalVar); // Accessible: 'I am a global variable'
    
}
outerFunction();
// console.log(outerVar); // Unaccessible: ReferenceError
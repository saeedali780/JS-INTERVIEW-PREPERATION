//Scope in js ( Global, functional, block )

// Global Scope
var globalVar = "I am a global variable";
function globalScopeExample() {
    console.log(globalVar); // Accessible here
}
globalScopeExample();
console.log(globalVar); // Accessible here too

// Functional Scope
function functionalScopeExample() {
    var funcVar = "I am a functional variable";
    console.log(funcVar); // Accessible here
}
functionalScopeExample();
console.log(funcVar); // Uncaught ReferenceError: funcVar is not defined

// Block Scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}
console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// Demonstrating var vs let/const in block scope
if (true) {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";
    console.log(varVariable); // Accessible here
    console.log(letVariable); // Accessible here
    console.log(constVariable); // Accessible here
}
console.log(varVariable); // Accessible here
console.log(letVariable); // Uncaught ReferenceError: letVariable is not defined
console.log(constVariable); // Uncaught ReferenceError: constVariable is not defined

// Summary:
// 1. Global scope variables are accessible everywhere.
// 2. Functional scope variables are only accessible within the function they are defined in.
// 3. Block scope variables (let and const) are only accessible within the block they are defined
//  in, while var is function-scoped.
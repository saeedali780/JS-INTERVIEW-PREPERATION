// Var, let and const
var globalVar = "I am a global variable";

function testScope() {
    var functionVar = "I am a function-scoped variable";
    let blockLet = "I am a block-scoped variable";

    if (true) {
        let innerBlockLet = "I am an inner block-scoped variable";
        console.log(innerBlockLet); // Accessible here
    }
    console.log(functionVar); // Accessible here
    // console.log(innerBlockLet); // Unaccessible here, would throw an error
}
testScope();
console.log(globalVar); // Accessible here
// console.log(functionVar); // Unaccessible here, would throw an error
// console.log(blockLet); // Unaccessible here, would throw an error

// Hoisting
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = "I am hoisted";

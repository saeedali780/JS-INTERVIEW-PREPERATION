// Var, let and const
// var globalVar = "I am a global variable";

// function testScope() {
//     var functionVar = "I am a function-scoped variable";
//     let blockLet = "I am a block-scoped variable";

//     if (true) {
//         let innerBlockLet = "I am an inner block-scoped variable";
//         console.log(innerBlockLet); // Accessible here
//     }
//     console.log(functionVar); // Accessible here
//     // console.log(innerBlockLet); // Unaccessible here, would throw an error
// }
// testScope();
// console.log(globalVar); // Accessible here
// // console.log(functionVar); // Unaccessible here, would throw an error
// // console.log(blockLet); // Unaccessible here, would throw an error

// // Hoisting
// console.log(hoistedVar); // undefined due to hoisting
// var hoistedVar = "I am hoisted";


// Variable Shadowing
// function shadowingExample() {
//     let outerVar = "I am the outer variable";

//     {
//         let outerVar = "I am the inner variable"; // Shadows the outer variable
//         console.log(outerVar); // Outputs: I am the inner variable
//     }
//     console.log(outerVar); // Outputs: I am the outer variable
// }
// shadowingExample();

// function test(){
//     let x = 10;
//     var y = 20;
//     if(true){
//         let y = 30; // block scoped
//         var x = 40; // function scoped
//         console.log(x); // 40
//         console.log(y); // 30
//     }
//     console.log(x); // 10
//     console.log(y); // 40
// }
// test();
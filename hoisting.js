// Hoisting in JavaScript
// Definitions of functions and variables are moved to the top of their scope
//  before code execution

// console.log(hoistedVar); // Output: undefined
// var hoistedVar = 'I am hoisted!';

// hoistedFunction(); // Output: 'I am a hoisted function!'
// function hoistedFunction() {
//     console.log('I am a hoisted function!');
// }
// // Note: let and const are not hoisted in the same way as var
// // They are hoisted but not initialized, leading to a "temporal dead zone"
// console.log(notHoistedVar); // ReferenceError: Cannot access 'notHoistedVar' before initialization
// let notHoistedVar = 'I am not hoisted!';

// Temporal dead zone example in JavaScript
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// const b = 20;


// Function expressions are not hoisted
// hoistedFuncExpr(); // TypeError: hoistedFuncExpr is not a function
// var hoistedFuncExpr = function() {
//     console.log('I am a function expression!');
// };
// However, function declarations are hoisted
// hoistedFuncDecl(); // Output: 'I am a function declaration!'
// function hoistedFuncDecl() {
//     console.log('I am a function declaration!');
// }

// Summary:
// - var declarations are hoisted and initialized with undefined.
// - let and const declarations are hoisted but not initialized, leading to a temporal dead zone.
// - Function declarations are hoisted completely.
// - Function expressions are not hoisted.
// Understanding hoisting is crucial for avoiding unexpected behaviors in JavaScript code.

// Output Base Questions
// 1. What will be the output of accessing a var variable before its declaration?
//    Answer: undefined

// 2. What happens when you try to access a let or const variable before its declaration?
//    Answer: ReferenceError
// 3. Are function declarations hoisted in JavaScript?
//    Answer: Yes
// 4. Are function expressions hoisted in JavaScript?
//    Answer: No

// console.log(a);
// var a = 10;
// // Output: undefined

// console.log(b);
// let b = 20;
// // Output: ReferenceError: Cannot access 'b' before initialization

// console.log(c);
// const c = 30;
// // Output: ReferenceError: Cannot access 'c' before initialization

// foo();
// function foo() {
//   console.log("Hello");
// }
// // Output: Hello

// bar();
// var bar = function() {
//   console.log("World");
// };
// // Output: TypeError: bar is not a function

// console.log(a);
// var a = 5;
// function a() {}
// console.log(a);
// // Output:
// // First console.log(a): function a() {}
// // Second console.log(a): 5

// function test() {
//   console.log(x);
//   var x = 20;
// }
// test();
// // Output: undefined

// function test() {
//   console.log(x);
//   let x = 20;
// }
// test();
// Output: ReferenceError: Cannot access 'x' before initialization

// var x = 10;

// function test() {
//   console.log(x);
//   var x = 20;
// }

// test();
// console.log(x);
// // Output:
// First console.log(x): undefined
// Second console.log(x): 10

// var a = 1;

// function demo() {
//   console.log(a);
//   a = 5;
//   console.log(a);
// }

// demo();
// console.log(a);
// Output:
// First console.log(a): undefined
// Second console.log(a): 5
// Third console.log(a): 1

// console.log(typeof b);
// var b = function() {};
// Output: undefined

// foo();      
// var foo = function() {
//   console.log("A");
// };
// function foo() {
//   console.log("B");
// }

// foo();
// Output:
// First foo(): B
// Second foo(): A
// Explanation:
// The function declaration foo() is hoisted first, so the first call to foo() invokes that function, printing "B".
// The variable declaration var foo is hoisted next, but its assignment to the function expression happens later. 
// Therefore, the second call to foo() invokes the function expression, printing "A".

// function outer() {
//   console.log(a);
//   function a() {}
//   var a = 10;
//   console.log(a);
// }

// outer();
// Output:
// First console.log(a): function a() {}
// Second console.log(a): 10
// Explanation:
// Inside the outer function, the function declaration a() is hoisted first, so the first console.log(a) prints the function.
// The variable declaration var a is hoisted next, but its assignment to 10 happens later. 
// Therefore, the second console.log(a) prints 10.

// function test(a) {
//   console.log(a);
//   function a() {}
//   console.log(a);
// }

// test(5);
// Output:
// First console.log(a): function a() {}
// Second console.log(a): function a() {}
// Explanation:
// In this case, the function declaration a() is hoisted above the parameter a,
//  so both console.log(a) statements print the function.

// console.log(x);
// function x() {
//   return 1;
// }
// var x = 20;
// console.log(x);
// Output:
// First console.log(x): function x() { return 1; }
// Second console.log(x): 20
// Explanation:
// The function declaration x() is hoisted first, so the first console.log(x) prints the function.
// The variable declaration var x is hoisted next, and its assignment to 20 happens later. 
// Therefore, the second console.log(x) prints 20.

// bar();
// function bar() {
//   console.log("BAR");
// }

// baz();
// var baz = function () {
//   console.log("BAZ");
// };
// Output:
// First bar(): BAR
// Second baz(): TypeError: baz is not a function
// Explanation:
// The function declaration bar() is hoisted completely, so the first call to bar() works fine and prints "BAR".
// The variable declaration var baz is hoisted, but its assignment to the function expression happens later. 
// Therefore, the second call to baz() results in a TypeError because baz is undefined at that point.

// var foo = function bar() {
//   console.log("Inside:", typeof bar);
// };
// foo();
// console.log("Outside:", typeof bar);
// Output:
// Inside: function
// Outside: undefined
// Explanation:
// Inside the function expression assigned to foo, bar is defined and refers to the function itself, 
// so typeof bar returns "function".Outside the function expression, 
// bar is not defined in the outer scope, so typeof bar returns "undefined".

// function make() {
//   return inner;
//   var inner = function() {
//     return "Hello";
//   };
// }

// console.log(typeof make());
// Output: undefined
// Explanation:
// Inside the make function, the variable declaration var inner is hoisted, 
// but its assignment to the function expression happens later. 
// Therefore, when make() is called, it returns undefined, and typeof undefined is "undefined".

// if (true) {
//   function test() {
//     return "A";
//   }
//   console.log(test());
// }

// console.log(typeof test);
// Output:
// Inside the if block: "A"
// Outside the if block: "function" 
// Explanation:
// In non-strict mode, function declarations inside blocks are hoisted to the 
// enclosing function or global scope. 
// Therefore, test is accessible both inside and outside the if block.

// function demo(a) {
//   console.log(a);
//   function a() {}
//   a = 50;
//   console.log(a);
// }

// demo(10);
// Output:
// First console.log(a): function a() {}
// Second console.log(a): 50
// Explanation:
// The function declaration a() is hoisted above the parameter a,
// so the first console.log(a) prints the function.
// The assignment a = 50 updates the variable a, so the second console.log(a) prints 50.

// function hello() {
//   console.log(msg);
//   var msg = "Hi";
//   console.log(msg);
//   function msg() {
//     return "Function";
//   }
// }

// hello();
// Output:
// First console.log(msg): function msg() {}
// Second console.log(msg): Hi
// Explanation:
// Inside the hello function, the function declaration msg() is hoisted first, 
// so the first console.log(msg) prints the function.
// The variable declaration var msg is hoisted next, but its assignment to "Hi" happens later. 
// Therefore, the second console.log(msg) prints "Hi".

// let x = 10;

// function test() {
//   console.log(x);
//   let x = 20;
// }

// test();
// Output: ReferenceError: Cannot access 'x' before initialization
// Explanation:
// The variable declaration let x is hoisted, but it is not initialized until
//  the line where it is defined. 
// Therefore, when console.log(x) is executed, it results in a ReferenceError because x 
// is in the temporal dead zone.

// for (var i = 1; i <= 3; i++) {
//   Promise.resolve().then(() => console.log(i));
// }
// console.log("Done");
// Output:
// Done
// 4
//explanation:
// The for loop completes before any of the Promise callbacks are executed.
// By the time the callbacks run, the value of i is 4, so "4" is printed three times after "Done".


// "use strict";

// console.log(typeof foo);
// {
//     function foo() {}
// }
// console.log(typeof foo);
// Output:
// First console.log(typeof foo): "undefined"
// Second console.log(typeof foo): "function"
// Explanation:
// In strict mode, function declarations inside blocks are not hoisted to the outer scope.
// Therefore, the first console.log(typeof foo) prints "undefined" because foo is not defined yet.
// Inside the block, the function foo is defined, so the second console.log(typeof foo) prints "function".

// console.log(a);
// var a = 5;
// function a() { return 10; }
// console.log(a);
// Output:
// First console.log(a): function a() { return 10; }
// Second console.log(a): 5

// function x() { return "A"; }
// function x() { return "B"; }

// console.log(x());
// Output: "B"
// Explanation:
// The second function declaration of x() overwrites the first one due to hoisting.
// Therefore, when x() is called, it invokes the second function, returning "B".

// let x = 5;

// function demo(y = x) {
//   console.log(y);
//   let x = 20;
// }

// demo();
// Output: 5  
// Explanation:
// The default parameter y = x captures the value of the outer x (which is 5) 
// before the inner let x = 20 is declared. 
// Therefore, when demo() is called without arguments, y is assigned the value 5, 
// and that is what gets printed.

// for (var i = 0; i < 3; i++) {}
// console.log(i);
// Output: 3
// Explanation:
// The variable i is declared with var, which has function scope. 
// After the for loop completes, i is incremented to 3, 
// so console.log(i) prints 3.

// console.log(sum);
// var sum = function(a, b) { return a + b; };
// console.log(sum(2, 3));
// Output:
// First console.log(sum): undefined
// Second console.log(sum(2, 3)): 5
// Explanation:
// The variable declaration var sum is hoisted and initialized with undefined.
// Therefore, the first console.log(sum) prints undefined.
// The assignment of the function expression to sum happens later,
// so when sum(2, 3) is called, it correctly invokes the function, returning 5.
// console.log(f);
// var f = 20;
// function f() { return 40; }
// console.log(f);
// Output:
// First console.log(f): function f() { return 40; }
// Second console.log(f): 20   
// Explanation:
// The function declaration of f() is hoisted first, so the first console.log(f) prints the function.
// The variable declaration var f is hoisted next, but its assignment to 20 happens later.
// Therefore, the second console.log(f) prints 20.

// function test(a) {
//   console.log(a);
//   var a = 20;
//   console.log(a);
// }
// test(5);
// Output:
// First console.log(a): 5
// Second console.log(a): 20
// Explanation:
// The parameter a is initialized with the value 5 when test(5) is called.
// The variable declaration var a is hoisted, but it does not affect the parameter.
// Therefore, the first console.log(a) prints 5.
// After the assignment a = 20, the second console.log(a) prints 20.

(function() {
  console.log(typeof foo);
  var foo = function() {};
  console.log(typeof foo);
})();
// Output:
// First console.log(typeof foo): "undefined"
// Second console.log(typeof foo): "function"
// Explanation:
// The variable declaration var foo is hoisted and initialized with undefined.
// Therefore, the first console.log(typeof foo) prints "undefined".
// The assignment of the function expression to foo happens later,
// so when the second console.log(typeof foo) is executed, it prints "function".

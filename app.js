// ==== HOISTING IN JS ====

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase before the code is executed. This means that you can use variables and functions before they are declared in the code.

// Example of variable hoisting with var
// console.log(myVar); // Output: undefined
// var myVar = 10;
// console.log(myVar); // Output: 10

// Example of function hoisting

// myFunc()

// var myFunc = function() {
//     console.log("Fisrt");
// }
// myFunc();
// function myFunc() {
//     console.log("Second");
// }
// myFunc();

// var variable = 5;
// console.log(variable);

// (() => {
//   console.log(variable);
//   variable = 10;
// })();
// console.log(variable);

// for(var i=0;i<10;i++){
//   setTimeout(() => {console.log(i);}, 0)
// }

// var fullName = "John Doe";

// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function() {
//       return this.fullName;
//     }
//   },
//   getFullName: function() {
//     return this.fullName;
//   },

//   getFullName2: () => {
//     return this.fullName;
//   },

//   getFullName3: (function() {
//     return this.fullName
  
// })(),
// };
// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullName2());
// console.log(obj.getFullName3);

// const saeed ={
//   name:"saeed",
//   getName: function(){
//     console.log(this.name);
//   },
// }

// const ali = {
//   name:"ali",
//   getName: function(){
//     console.log(this.name);
//   },
// }

// ali.getName.call(saeed); // saeed
// saeed.getName.call(ali); // ali

// const saeed = {
//   name:"saeed",
//   getName: function(){
//     console.log(this.name);
//   },
// }

// const fn = saeed.getName.bind(saeed);
// fn(); // saeed
// fn(); // saeed
// setTimeout(saeed.getName.bind(saeed), 3 * 1000); // undefined

// const obj = Object.create({
//   height: 10
// }) 

// console.log(obj.height);

// delete obj.height;
// console.log(obj.height);

//scopes 

// var a = 1;

// function outer() {
//   var b = 2;  
//   function inner() {
//     var c = 3;  
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   inner();
// }
// outer();
// console.log(a);
// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined

// function test(){
//   let a = "Hello";
//   if(true){
//     let a = "Hi";
//     console.log(a);
//   }
//   console.log(a);
// }
// test();


// const nums = [1,2,3,4,5];

// multiplyByTwo = nums.map((num) => num * 2);

// console.log(multiplyByTwo);

// const nums = [1,2,3,4,5];

// const evenNums = nums.filter((num) => num % 2 === 0);

// console.log(evenNums);

// const nums = [1,2,3,4,5];

// const sum = nums.reduce((acc,curr)=>{
//   return acc + curr;
// })

// console.log(sum);


//Polyfills

// Polyfill for map

// Array.prototype.myMap = function(callback){
//   const result = [];
//   for(let i=0;i<this.length;i++){
//     result.push(callback(this[i],i,this));
//   }
//   return result;
// } 

// const nums = [1,2,3,4,5];

// const multiplyByTwo = nums.myMap((num) => num * 2);
// console.log(multiplyByTwo);

// Polyfill for filter

// Array.prototype.myFilter = function(callback){
//   const result = [];
//   for(let i=0;i<this.length;i++){
//     if(callback(this[i],i,this)){
//       result.push(this[i]);
//     }
//   }
//   return result;
// }

// const nums = [1,2,3,4,5];

// const evenNums = nums.myFilter((num) => num % 2 === 0);
// console.log(evenNums);


// Polyfill for reduce

// Array.prototype.myReduce = function(callback, initialValue){
//   let accumulator = initialValue === undefined ? this[0] : initialValue;
//   let startIndex = initialValue === undefined ? 1 : 0;
//   for(let i=startIndex;i<this.length;i++){
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// }
// const nums = [1,2,3,4,5];
// const sum = nums.myReduce((acc,curr) => acc + curr, 0);
// console.log(sum);

// Map vs ForEach 

// const nums = [1,2,3,4,5];
// const mapResult = nums.map((num) =>{
//   return num * 2;
// } 
// ).filter((num) => {
//   return num > 5;
// });

// console.log("Map Result:", mapResult);

// nums.forEach((num, index, arr) => {
//   arr[index] = num * 2;
// });
// console.log("ForEach Result:", nums);

// get names in uppercase from array of student objects

// let students = [
//   { name: "Alice", age: 20, grade: 85 },
//   { name: "Bob", age: 22, grade: 90 },
//   { name: "Charlie", age: 19, grade: 58 },
//   { name: "David", age: 21, grade: 92 },
//   { name: "Eve", age: 20, grade: 36 }
// ];


//Simple for loop to get names in uppercase
// let names = [];
// for(let i=0;i<students.length;i++){
//   names.push(students[i].name.toUpperCase());
// }
// console.log(names);

//Using map to get names in uppercase

// let studentNames = students.map((student)=>{
//   return student.name.toUpperCase();
// });
// console.log(studentNames);

//  return only details of those who got 80 grade

// let topStudents = students.filter((student)=>{
//   return student.grade > 80;
// });
// console.log(topStudents);

// get total age of all students

// let totalage = students.reduce((acc, student)=>{
//   return acc + student.age;
// }, 0);

// console.log(totalage);

// get names of students who got more than 80 grade in 

// let topStudentNames = students
//   .filter((student) => student.grade > 80)
//   .map((student) => student.name);

// console.log(topStudentNames);

// Return total marks for students with greater than 60 
// after 20 marks have been added to who scored less than 60

// let totalMarks = students.map((student)=>{
//   if(student.grade < 60){
//     student.grade += 20;
//   }
//   return student;
// })
// .filter((student) => student.grade > 60)
// .reduce((acc, student) => acc + student.grade, 0);
// console.log(totalMarks);

// Functions
// Q1 What is Function Declaration and Function Expression in JavaScript? Explain with examples.

// Function Declaration
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // Output: 5

// // Function Expression
// const multiply = function(a, b) {
//   return a * b;
// }
// console.log(multiply(2, 3)); // Output: 6

// What are first-class functions in JavaScript?

// First-class functions mean that functions in JavaScript are treated as first-class citizens.
// This means that functions can be assigned to variables, passed as arguments to other functions,
//  and returned from other functions.

// Example:

// // Assigning function to a variable
// const greet = function(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Alice")); // Output: Hello, Alice!

// // // Passing function as an argument
// function processUserInput(callback) {
//   const name = "Bob";
//   console.log(callback(name));
// }
// processUserInput(greet); // Output: Hello, Bob!

// // // Returning function from another function
// function makeMultiplier(factor) {
//   return function(number) {
//     return number * factor;
//   }
// }
// const double = makeMultiplier(2);
// console.log(double(5)); // Output: 10

// What is IFFE (Immediately Invoked Function Expression) in JavaScript? Provide an example of its usage.

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
// Example:

// (function() {
//   console.log("This is an IIFE!");
// })(); // Output: This is an IIFE!

// O/P BASED QUESTIONS

// What will be the output of the following code snippet?

// (function(x) {
//   return (function(y){
//     console.log(x);
//   }(2))  
// })(1);

// for(var i=0;i<3;i++){
//   setTimeout(() => {
//     console.log(i);
//   }, i *  1000)};

// Function Hoisting

// console.log(myFunc());

// function myFunc() {
//   return "Hello, World!";
// }

// console.log(myVar);
// var myVar = "JavaScript Hoisting";

// var x = 21

// var fun = function() {
//     console.log(x);
//     var x = 20;
// }
// fun();
// Params vs Arguments
// function multiply(...args) {
//   return args[0] * args[1];
// }
// let arr = [2, 3];
// console.log(multiply(...arr));


// What are Callback Functions in JavaScript? Explain with an example.

// A callback function is a function that is passed into another function as an argument and is executed after some operation has been completed. 
// Callbacks are commonly used for asynchronous operations such as handling events, making API calls, or reading files.

// Example:

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }
// function processUserInput(callback) {
//   const name = "Saeed";
//   callback(name);
// }
// processUserInput(greet); // Output: Hello, Saeed!

// Arrow Functions vs Regular Functions

// Arrow Function
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5

// // Regular Function
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(2, 3)); // Output: 6

// Differences:
// 1. Syntax: Arrow functions have a shorter syntax compared to regular functions.
// 2. 'this' Binding: Arrow functions do not have their own 'this' context; they inherit 'this' from the surrounding lexical scope. Regular functions have their own 'this' context.
// 3. 'arguments' Object: Regular functions have access to the 'arguments' object, while arrow functions do not.
// 4. Constructor: Regular functions can be used as constructors with the 'new' keyword, while arrow functions cannot.
// 5. Implicit Return: Arrow functions can have an implicit return when there is no block body, while regular functions always require an explicit return statement.

// Example demonstrating 'this' binding difference
// const obj = {
//   value: 10,
//   regularFunction: function() {
//     console.log(this.value); // 'this' refers to obj
//   },
//   arrowFunction: () => {
//     console.log(this.value); // 'this' refers to the surrounding scope (not obj)
//   }
// };

// obj.regularFunction();
// obj.arrowFunction();

// function  func(){
//   console.log(arguments);
//   for(let i=0;i<arguments.length;i++){
//     console.log(arguments[i]);
//   }
// }
// func(1,2,3,4);

// Clousures in JavaScript
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing)
//  function's variables and parameters, even after the outer function has returned. 
// Closures allow functions to retain access to their lexical scope, enabling data privacy and 
// encapsulation.

// Example of Closure:

// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log('Outer Variable:', outerVariable);
//     console.log('Inner Variable:', innerVariable);
//   };
// }
// const newFunction = outerFunction('outside');
// newFunction('inside');
// Output:
// Outer Variable: outside
// Inner Variable: inside

// Example of Closure for Data Privacy:

// function createCounter() {
//   let count = 0; // private variable
//   return function() {
//     count++;
//     return count;
//   };
// }
// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3

// function outer(){
//   var username = "Saeed";
//   function inner(){
//     console.log("Hello " + username);
//   }
//   inner();
// }
// outer();

//Clousures Scope Chain

// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return a + e + b + c + d;
//       }
//   }
// }
// }
// console.log(sum(1)(20)(30)(40)); //101

// Output based questions

// What will be the output of the following code snippet?

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged here?
//   }
//   console.log(count); // What is logged here?
// })();

// function createBase(num) {
//   return function (inner) {
//     return num + inner;
//   };
// }
// const addSix = createBase(6);
// console.log(addSix(10));; // What is the output?
// console.log(addSix(21));; // What is the output?

// Tricky question SetTimeout with loop
//  for(var i = 0;i<3;i++){
//        function inner(i){
//          setTimeout(() => {
//            console.log(i);
//          }, i * 1000);
//          }
//          inner(i);
// }

// console.log(null == undefined);
// console.log([]+[[]] + [] + !false);
// console.log([] + false - null + true);
// console.log(typeof(NaN));
// console.log([] + 1 + 2);
// console.log("b" + "a" + + "a" + "a");
// // console.log("1"[0]);

// let obj1 = { x: 10 };
// let obj2 = obj1; 
// obj2.x = 20;

// console.log(obj1.x); // 20 (original object changed)

// Task related to map,fileter,reduce

// Map Tasks

//1. Increment by Index
// "You are given an array of numbers. Can you create a function that returns 
// a new array where each element is increased by its index?"
// Example: [5, 10, 15] → [5+0, 10+1, 15+2] → [5, 11, 17]

// const numbers = [5, 10, 15];

// var map = (arr,fn) => {
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         result.push(fn(arr[i],i));
//     }
//     return result;
// }
// function incrementByIndex(num, index){
//     return num + index;
// }
// const newArray = map(numbers, incrementByIndex);
// console.log(newArray); // Output: [5, 11, 17] 

//2. Capitalize Strings
// "Given an array of lowercase strings, return a new array where the first letter of 
// each string is capitalized. How would you implement it without using map?"
// Example: ["apple", "banana"] → ["Apple", "Banana"]

// const strings = ["apple", "banana"];
// var map = (arr,fn) => {
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         result.push(fn(arr[i],i));
//     }
//     return result;
// }
// function capitalizeFirstLetter(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// const capitalizedArray = map(strings, capitalizeFirstLetter);
// console.log(capitalizedArray); // Output: ["Apple", "Banana"]

//3. Conditional Transformation
// "Create a function that doubles odd numbers but leaves even numbers
//  unchanged in a new array. How will you do it without map?"
// Example: [1, 2, 3, 4] → [2, 2, 6, 4]

// const numbers = [1, 2, 3, 4];
// var map = (arr,fn) => {
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         result.push(fn(arr[i],i));
//     }
//     return result;
// }
// function doubleOddNumbers(num){
//     if(num % 2 !== 0){
//         return num * 2;
//     }
//     return num;
// }
// const transformedArray = map(numbers, doubleOddNumbers);
// console.log(transformedArray); // Output: [2, 2, 6, 4]

//4. Type Conversion
// "Given an array containing numbers and strings, return a new array where numbers are 
// converted to strings and strings are converted to numbers, if possible."

// const mixedArray = [1, "2", 3, "four", "5"];
// var map = (arr,fn) => {
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         result.push(fn(arr[i],i));
//     }
//     return result;
// }
// function convertTypes(value){
//     if(typeof value === "number"){
//         return value.toString();
//     } else if(!isNaN(Number(value))){
//         return Number(value);
//     }
//     return value;
// }
// const convertedArray = map(mixedArray, convertTypes);
// console.log(convertedArray); // Output: ["1", 2, "3", "four", "5"]

// Custom Filter Questions
//1. Filter by Condition
// "Given an array of numbers, return a new array containing only numbers greater than 10.
//  How will you implement this without using filter?"

// const numbers = [5, 12, 8, 20, 3];

// var filter = (arr,fn) => {
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         if(fn(arr[i],i)){
//             result.push(arr[i]);
//         }
//     }
//     return result;
//     }
// function isGreaterThanTen(num){
//     return num > 10;
// }
// const filteredArray = filter(numbers, isGreaterThanTen);
// console.log(filteredArray); // Output: [12, 20]

//2. String Length Check
// "You have an array of words. Write a function to return only those words
//  whose length is more than 4 characters."
// Example: ["cat", "lion", "tiger"] → ["lion", "tiger"]

// const words = ["cat", "lion", "tiger"];
// var filter = (arr,fn) => {
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         if(fn(arr[i],i)){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// function isLengthMoreThanFour(word){
//     return word.length > 4;
// }
// const longWords = filter(words, isLengthMoreThanFour);
// console.log(longWords); // Output: ["tiger"]

//3. Even Index Elements
// "How would you return elements that are located at even indexes in an array?"
// Example: [5, 10, 15, 20] → [5, 15]

const numbers = [5, 10, 15, 20];

var filter = (arr,fn) => {
    const result = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
}
function isEvenIndex(num, index){
    return index % 2 === 0;
}
const evenIndexElements = filter(numbers, isEvenIndex);
console.log(evenIndexElements); // Output: [5, 15]
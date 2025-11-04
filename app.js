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

Array.prototype.myMap = function(callback){
  const result = [];
  for(let i=0;i<this.length;i++){
    result.push(callback(this[i],i,this));
  }
  return result;
} 

const nums = [1,2,3,4,5];

const multiplyByTwo = nums.myMap((num) => num * 2);
console.log(multiplyByTwo);
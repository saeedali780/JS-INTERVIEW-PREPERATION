// this keyword in js 
// this keyword refers to the object that is executing the current function. 
// It can refer to different objects depending on how the function is called.

// this.a = 10;
// // console.log(this.a); // Output: 10

// function myFunction() {
//     console.log(this.a);
// }
// myFunction(); // Output: undefined (in strict mode) or 10 (in non-strict mode)

// const obj ={
//     name: "Saeed",
//     age: 18,
//     getName: function() {
//         return this.name;
//     }
// };

// console.log(obj.getName()); // Output: "Saeed"
// // In the above example, the getName function is a method of the obj object. When we call obj.
// // getName(), the this keyword inside the getName function refers to the obj object,
// // allowing us to access its name property.

// let user = {
//     name: "Saeed",
//     age: 18,
//     getdetails(){
//         console.log(this);
//         const nestedFunction = () => console.log(this.name);
//         nestedFunction();
//     }
// };

// user.getdetails(); // Output: "Saeed"

// In the above example, we have an object user with a method getdetails. 
// Inside getdetails, we define a nested function nestedFunction using an arrow function.
// Arrow functions do not have their own this value;
// instead, they inherit this from the enclosing context.
// Therefore, when we call user.getdetails(), 
// the this keyword inside nestedFunction refers to the user object, 
// allowing us to access its name property.



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getName(){
//         console.log(this.name);
//     }
// }

// const user =   new Person("Saeed", 18);
// user.getName(); // Output: "Saeed"


// const user = {
//     name: "Saeed",
//     age: 18,
//     getName: function() {
//         const name = "Ali";
//         console.log(this.name);
//     }
// }
// user.getName()


// function makeUser(){
//     return{
//         name: "Saeed",
//         ref(){
//             return this;
//         }
//     }
// }

// const user = makeUser();
// console.log(user.ref().name)


// const user = {
//     name: "Saeed",
//     logMessage(){
//         console.log(this.name);
//     }
// }

// setTimeout(function(){
//     user.logMessage();
// }, 1000);

// let calculator ={
//     read(){
//         this.a = +prompt("Enter first number: ");
//         this.b = +prompt("Enter second number: ");
//     },

//     sum(){
//         return this.a + this.b;
//     },

//     mul(){
//         return this.a * this.b;
//     }
// };

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

// const calc = {
//     total: 0,
//     add(a){
//         this.total += a;
//         return this;
//     },
//     subtract(a){
//         this.total -= a;
//         return this;
//     },
//     multiply(a){
//         this.total *= a;
//         return this;
//     },
//     divide(a){
//         this.total /= a;
//         return this;
//     }
// }
// const result = calc.add(10).add(5).subtract(3).multiply(2).divide(4);

// console.log(result.total); // Output: 6


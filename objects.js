// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// console.log(obj.name); // Output: John
// console.log(obj['age']); // Output: 30

// const func = (function(a,b) {
//     delete a;
//     return a;
// })("Hello", "World");
// console.log(func); // Output: Hello

// const user = {
//     name: 'Alice',
//     age: 25,
//     city: 'Los Angeles',
//     "Hello World": "This is a test",
// }

// console.log(user.name); // Output: Alice
// console.log(user['age']); // Output
// console.log(user["Hello World"]); // Output: This is a test`

// How we can add dynamic properties to an object How we can add dynamic properties to an object
// const propertyName = "fname";
// const value = "John";
// const user = {
//     [propertyName]: value
// }
// console.log(user.fname); // Output: John    


// const user = {    name: 'Alice',
//     age: 25,
//     city: 'Los Angeles',
//     "Hello World": "This is a test",
// }

// for (let key in user) {
//     console.log(key + ": " + user[key]);
// }

// create a function multiplyByTwo(obj) that takes an object as an argument and multiplies all its numeric properties by 2. The function should return the modified object.

// function multiplyByTwo(obj) {
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             obj[key] *= 2;
//         }
//     }
//     return obj;
// }

// const myObj = {
//     a: 1,
//     b: 'hello',
//     c: 3,
//     d: true
// };

// console.log(multiplyByTwo(myObj)); // Output: { a: 2, b: 'hello', c: 6, d: true }

// what is the output of the following code?

const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;
console.log(a[b]); // Output: 456
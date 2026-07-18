// what is call ?
// The call() method is a built-in JavaScript function that 
// allows you to invoke a function with a specified this value
// and arguments provided individually. 
// It is used to change the context of the function, 
// allowing you to call a function as if it were a method of another object.

// const obj = {
//     name: "Saeed",
//     age: 18,
// }

// function getName(age) {
//    return "Hello " + this.name + " Age is " + this.age;
// }

// console.log(getName.call(obj,20)); // Output: "Hello Saeed Age is 18"


// what is apply?
// The apply() method is similar to the call() method,
// but it takes an array of arguments instead of individual arguments.
// It allows you to invoke a function with a specified this value
// and an array of arguments. The apply() method is useful when you have
// an array of values that you want to pass as arguments to a function.


// const obj = {
//     name: "Saeed",
// }

// function getName(age, profession) {
//    return "Hello " + this.name + " Age is " + this.age + " Profession is " + profession;
// }

// console.log(getName.apply(obj,[20,"Software Engineer"])); // Output: "Hello Saeed Age is 18 Profession is Software Engineer"

// what is bind?
// The bind() method is another built-in JavaScript function that allows you to create a new function
// with a specified this value and optional arguments. 
// It returns a new function that, when called, has its this keyword set to the provided value.
// The bind() method is useful when you want to create a function that can be called later with 
// a specific context.

// const obj = {
//     name: "Saeed",
// }

// function getName(age, profession) {
//    return "Hello " + this.name + " Age is " + age + " Profession is " + profession;
// }

// const boundFunction = getName.bind(obj);
// console.log(boundFunction(20, "Software Engineer")); // Output: "Hello Saeed Age is 20 Profession is Software Engineer"
// console.log(boundFunction(25, "Data Scientist")); // Output: "Hello Saeed Age is 25 Profession is Data Scientist"


// const age = 18;

// const user = {
//     name: "Saeed",
//     age: 20,
//     getName: function() {
//         return this.age;
//     }
// };

// const user2 = {
//     age: 25
// };

// console.log(user.getName.call(user2)); // Output: 25


// const animals = [
//     {species: "Lion", name:"King"},
//     {species: "Whale", name:"Queen"},
// ];

// function printAnimals(i){
//     this.print = function(){
//         console.log("#" + i + " " + this.species + " " + this.name);
//     };
//     this.print();
// };

// for(let i = 0; i< animals.length;i++){
//     printAnimals.call(animals[i], i)
// }


// how do we append an array to another array using apply method?


// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// array1.push.apply(array1, array2);

// console.log(array1); // Output: [1, 2, 3, 4, 5, 6]


const numbers = [5, 6, 2, 3, 7];

const  max = Math.max.apply(null, numbers);

const  min = Math.min.apply(null, numbers);

console.log(max); // Output: 7
console.log(min); // Output: 2                


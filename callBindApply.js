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


const obj = {
    name: "Saeed",
}

function getName(age, profession) {
   return "Hello " + this.name + " Age is " + this.age + " Profession is " + profession;
}

console.log(getName.apply(obj,[20,"Software Engineer"])); // Output: "Hello Saeed Age is 18 Profession is Software Engineer"
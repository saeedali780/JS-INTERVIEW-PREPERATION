// what is call ?
// The call() method is a built-in JavaScript function that 
// allows you to invoke a function with a specified this value
// and arguments provided individually. 
// It is used to change the context of the function, 
// allowing you to call a function as if it were a method of another object.

const obj = {
    name: "Saeed",
    age: 18,
}

function getName(age) {
   return "Hello " + this.name + " Age is " + this.age;
}

console.log(getName.call(obj,20)); // Output: "Hello Saeed Age is 18"
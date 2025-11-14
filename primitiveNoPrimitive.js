// Primitive , non-primitive in js
// Primitive data types: string, number, boolean, null, undefined, symbol, bigint
// Defination Primitive data types are the most basic data types in JavaScript. 
// They are immutable and hold a single value.And it stores in stack memory.

// Primitive example
let num = 42;
let str = "Hello, World!";
let bool = true;
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"


// Non-primitive data types: object, array, function
// Defination Non-primitive data types are more complex data types that can hold multiple
// values or properties.They are mutable and are stored in heap memory.

// Non-primitive example
let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3, 4, 5];
function greet() {
    return "Hello!";
}
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"
console.log(typeof greet); // "function"
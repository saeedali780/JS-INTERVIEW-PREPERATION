// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// Synchrounous code vs Asynchronous code

console.log("Start of the program");

setTimeout(() => {
    console.log("This is a message from setTimeout");
}, 2000);

console.log("This is end of the program");


// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// Synchrounous code vs Asynchronous code

console.log("Start of the program");

const promise1 = new Promise((res,rej)=>{
    console.log(1);
    res(2);
});

promise1.then((value)=>{
    console.log(value);
});
console.log("End of the program");

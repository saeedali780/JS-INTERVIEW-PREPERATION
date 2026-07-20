// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// promises in js Output based Questions

const firstPromise = new Promise((resolve, reject) => {
    resolve("First promise resolved");
})

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise)
})

secondPromise.then((result) => {
    console.log(result); // Output: First promise resolved
})

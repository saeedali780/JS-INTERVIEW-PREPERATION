// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// Synchrounous code vs Asynchronous code

console.log("Start of the program");

const sub = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Success");
    }
    else {
        reject("Failed");
    }
});

sub.then((message) => {
    console.log("This is in then: " + message);
}).catch((message) => {
    console.log("This is in catch: " + message);
});

console.log("This is end of the program");


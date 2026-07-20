// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// Synchrounous code vs Asynchronous code

console.log("Start of the program");

function fn(){
   return new Promise((res,rej)=>{
    console.log(1);
    res("success");
});
}

console.log("Middle of the program");

fn().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
});

console.log("End of the program");

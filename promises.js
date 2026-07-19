// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// Synchrounous code vs Asynchronous code

console.log("Start of the program");

function importAction(message, callback) {
    setTimeout(() => {
        callback(message);
    }, 2000);
}

function likeTheVideo(video){
    setTimeout(() => {
        console.log(`You liked the video: ${video}`);
    }, 1000);
}

const message = importAction("Hello, World!", function(message){
console.log(message);
likeTheVideo("JavaScript Promises Tutorial");
})

console.log("This is end of the program");


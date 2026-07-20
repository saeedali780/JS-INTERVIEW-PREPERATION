// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// Synchrounous code vs Asynchronous code

console.log("Start of the program");

function importAction(username, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello, ${username} you subscribed to the channel!`);
        }, 1000);
    });
}

function likeTheVideo(video,cb){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`You liked the video: ${video}`);
        }, 1000);
    });
}
function shareTheVideo(video,cb){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`You shared the video: ${video}`);
        }, 1000);
    });
}

importAction("Saeed Ali").then((res)=>{
    console.log(res);

    return likeTheVideo("JavaScript Promises");
}).then((res)=>{
    console.log(res);
    return shareTheVideo("JavaScript Promises");
}).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
});
console.log("This is end of the program");


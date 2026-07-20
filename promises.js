// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// promises in js Output based Questions

function job(state){
    return new Promise(function(resolve, reject){
        if(state){
            resolve('success');
        }
        else{
            reject('error');
        }
    });
};

let promise = job(true);

promise
.then(function(data){
    console.log(data);

    return job(false);
})
.catch(function(error){
    console.log(error);

    return "error caught";
})
.then(function(data){
    console.log(data);

    return job(true);
}).catch(function(error){
    console.log(error);
});
// output:
// success
// error
// error caught

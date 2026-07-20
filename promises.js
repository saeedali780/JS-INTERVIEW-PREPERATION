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
            reject(' rejected error');
        }
    });
};

let promise = job(true); // success

promise
.then(function(data){
    console.log(data);
    return job(true);
})
.then(function(data){
    if(data !== 'victory'){
        throw 'Defeat'; 
    }
    return job(true);
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error); // defeat
    return job(false);
}).then(function(data){
    console.log(data);

    return job(false);
}).catch(function(error){
    console.log(error); // rejected error
    return 'Error caught';
}).then(function(data){
    console.log(data); // Error caught
    return new Error('test');
}).then(function(data){
    console.log('Success:', data.message); // Success: test
}).catch(function(data){
    console.log('Error:', data.message);
});

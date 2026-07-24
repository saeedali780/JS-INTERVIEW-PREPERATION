// Promises in JavaScript are a way to handle asynchronous operations. 
// They represent a value that may be available now,
// or in the future, or never. Promises can be in one of three states: 
// pending, fulfilled, or rejected.

// promises in js Output based Questions


// async function loadJson(url){
//     let response = await fetch(url);
//    if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }
//   throw new Error(response.status);
// }

// loadJson('https://jsonplaceholder.typicode.com/todos/1')
//   .then(json => console.log(json))
//   .catch(err => console.log(err));

// Promise Pollyfills implementation

function PromisePollyfill(executor){
  let onResolve,onReject;
  function resolve(value){
    onResolve(value)
  };
  function reject(value){
    onReject(value)
  }

  this.then = function(callback){
   onResolve = callback
   return this;

  };
  this.catch = function(callback){
    onReject = callback
    return this
  };

  executor(resolve, reject)
}

const exapmePromise = new PromisePollyfill((resolve,reject)=>{
  setTimeout(()=>{
    resolve(2);
  },1000);
});

exapmePromise.then((res)=>{
  console.log(res);
}).catch((error)=>{
  console.log(error);
})
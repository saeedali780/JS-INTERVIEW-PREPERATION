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

function PromisePollyfill(executor) {
    let onResolve,
        onReject,
        isFullfiled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(val) {
        isFullfiled = true;
        value = val;

        if (typeof onResolve === "function") {
            isCalled = true;
            onResolve(val);
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;

        if (typeof onReject === "function") {
            isCalled = true;
            onReject(val);
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (isFullfiled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }

        return this;
    };

    this.catch = function (callback) {
        onReject = callback;

        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }

        return this;
    };

   try{
     executor(resolve, reject);
   }catch(error){
    console.log(error);
    reject(error)
   }
}

const examplePromise = new PromisePollyfill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

examplePromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

    PromisePollyfill.resolve = (val)=>{
      return new PromisePollyfill(function executor(resolve, _reject){
        resolve(val)
      })
    }
     PromisePollyfill.reject = (val)=>{
      return new PromisePollyfill(function executor(resolve, _reject){
        _reject(val)
      })
    }
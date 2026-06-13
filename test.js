// function find(){
//     let a  = [];
//     for(let i = 0; i < 1000000 ; i++){
//         a[i] = i *1;
//     }
//     return function(index){
//         return a[index];
//     }
// }

// let findClosure = find();
// console.time("6");
// findClosure(500000);
// console.timeEnd("6");

// console.time("12");
// findClosure(100000);
// console.timeEnd("12");

// function a(){
//     for(var i = 0; i < 3 ; i++){
//         (function(j){
//             setTimeout(function(){
//                 console.log(j);
//             },1000
//             )
//         })(i);
//     }
// }
// a();

// function counter(){
//      var count =0;
    
//     function increment(incrementValue){
//        count += incrementValue;
//     }
//     function retrive(){
//         return "Counter = " + count;
//     }
//     return{
//         retrive, increment,
//     }
// }

// var counter1 = counter();
// counter1.increment(5);
// counter1.increment(10);
// counter1.increment(10);

// console.log(counter1.retrive());


// let Module = (function(){
//     function privateMethod(){
//         console.log("I am private");
//     }
//     function publicMethod(){
//         console.log("I am public");
//     }
//     return {
//         publicMethod,
//     }
// })();

// Module.publicMethod();
// Module.privateMethod();

// let view;
// function likeThePost(){
//     let count = 0;
//     return function(){
//         if(count > 0){
//             console.log("You have already liked the post");
//         }
//         else{
//             view = "You liked the post";
//             console.log(view);
//             count++;
//         };
//     };
// };
// let like = likeThePost();
// like();
// like();
// like();

// function clumsSquare(num1,num2){
//     for(let i = 0; i < 1000000 ; i++){}
//     return num1 * num2;
// }





// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3

// function createBase(num) {
//     return function (n) {
//         return num + n;
//     }
// }

// var addSix = createBase(6);

// console.log(addSix(10));
// console.log(addSix(20));


// function find(){
//     let a = [];
//     for(let i = 0; i < 1000000 ; i++){
//         a[i] = i * 1;
//     }
//     return function(index){
//         return a[index];
//     }
// }

// let findClosure = find();

// console.time("6");
// findClosure(500000);
// console.timeEnd("6");

// console.time("7");
// findClosure(8);
// console.timeEnd("7");


// for(var i = 0; i < 3 ; i++){
//     function closure(j){
//         setTimeout(()=>{
//             console.log(j);
            
//         },1000)
//     }
//     closure(i);
// }



// Q1
// function counter(){
//     var _count = 0;

//     function increment(){
//         _count++;
//     }
//     function retrieve(){
//         increment();
//         return _count;
//     }
//     return retrieve
// }

// var incrementCounter = counter();
// console.log(incrementCounter());
// console.log(incrementCounter());
// console.log(incrementCounter());


// Q2

// function greet(name){
//     return function(){
//         console.log("Hello " + name);
//     }
// }
// let greetClosure = greet("Saeed");
// greetClosure(); // Output: Hello Saeed


// Q3

// function multiplyFactory(x){
//     return function(y){
//         return x * y;
//     }
// }
// let multiplyBy2 = multiplyFactory(2);
// console.log(multiplyBy2(5)); // Output: 10
// console.log(multiplyBy2(10)); // Output: 20

// Q4

// function createBankAccount(){
//     let balance = 0;

//     function deposit(amount){
//         balance += amount;
//         console.log("Deposited: " + amount + ", Current Balance: " + balance);
//     }
//     function withdraw(amount){
//         if(amount > balance){
//             console.log("Insufficient funds. Current Balance: " + balance);
//         }
//         else{
//             balance -= amount;
//             console.log("Withdrew: " + amount + ", Current Balance: " + balance);
//         }
//     }
//     function getBalance(){
//         return balance;
//     }
//     return {
//         deposit,
//         withdraw,
//         getBalance,
//     }
// }
// const myAccount = createBankAccount();

// myAccount.deposit(100);
// myAccount.withdraw(30);
// console.log("Final Balance: " + myAccount.getBalance());

// Q5

// const secrectModule = (function(){
//     let secret = "JS is awesome";

//     function revealSecret(){
//         console.log("The secret is: " + secret);
//     }
//     return {
//         revealSecret,
//     }
// })();
// secrectModule.revealSecret(); // Output: The secret is: JS is awesome
// console.log(secrectModule.secret);
//  // Output: undefined


// Q6

// function counter(){
//    for(var i = 0;i <3;i++){
//     (function(j){
//         setTimeout(()=>{
//             console.log(j);
//         })
//     })(i);
//    }
// };
// counter();

// Q7

// function rememberValue() {
//     return function(x){
//         console.log("Last value was: " + x);    
//     }
// }
// let remember = rememberValue();
// remember("Apple"); // Output: Last value was: Apple
// remember("Banana"); // Output: Last value was: Banana
// remember("Cherry"); // Output: Last value was: Cherry


// Q8

// function createTodoList(){
//     let todos = [];
//     function addTodo(todo){
//         todos.push(todo);
//         console.log("Added: " + todo);
//     };
//     function removeTodo(todo){
//         const index = todos.indexOf(todo);
//         if(index > -1){
//             todos.splice(index, 1);
//             console.log("Removed: " + todo);
//         }
//         else{
//             console.log("Todo not found: " + todo);
//         };
//     }
//     function getTodos(){
//         return todos;
//         }
//     return {
//         addTodo,
//         removeTodo,
//         getTodos,
//     };
// }
// const todo = createTodoList();
// todo.addTodo("Learn JS");
// todo.addTodo("Practice coding");
// console.log("Current Todos: " + todo.getTodos());
// todo.removeTodo("Learn JS");
// console.log("Current Todos: " + todo.getTodos());


// Q9

// function once(fn){
//     let called = false;
//     return function(){
//         if(!called){
//             called = true;
//             return fn()
//         }
//         else{
//             console.log("Nothing!");
//         }
//     }
// }
// const sayHi = once(function(){
//     console.log("Hi!");
// });
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();

// Q10

// let userManager = (function(){
//     let users = [];

//     function addUser(name){
//         users.push(name);
//         console.log("Added user: " + name);
//     }
//     function removeUser(name){
//         let index =  users.indexOf(name);
//         if(index > -1){
//             users.splice(index,1);
//             console.log("Removed user: " + name);
//         }else{
//             console.log("User not found: " + name);
//         }
//     }
//     function getUsers(){
//         return users;
//     }
//     return {
//         addUser,
//         removeUser,
//         getUsers,
//     };
// })();
// userManager.addUser("Alice");
// userManager.addUser("Bob");
// console.log("Current users: " + userManager.getUsers());
// userManager.removeUser("Alice");
// console.log("Current users: " + userManager.getUsers());


// function memoizedSquare() {
//     let cache = {};
//     return function(n){
//        if(cache[n] !== undefined){
//         console.log("Fetching from cache for: " + n);
//         return cache[n];
//        }
//        else{
//         console.log("Calculating result for: " + n);
//         let result = n*n;
//         cache[n] = result;
//         return result;  
//        }
//     }
// }
// const square = memoizedSquare();
// console.log(square(5)); // Calculating result for: 5, Output: 25
// console.log(square(5)); // Fetching from cache for: 5, Output: 25
// console.log(square(10)); // Calculating result for: 10, Output: 100
// console.log(square(10)); // Fetching from cache for: 10, Output: 100



// function myMemoizedClumsy(fn,context){
//     let cache = {};
//     return function(...args){
//         var argsCache = JSON.stringify(args);
//         if(!cache[argsCache]){
//             cache[argsCache] = fn.call(context || this, ...args);
//             return cache[argsCache];
//         }
//         return cache[argsCache];
//     }
// }

// const clumsyProduct = (num1,num2)=>{
//     for(let i = 0; i < 1000000 ; i++){}
//     return num1 * num2;
// }

// const memoizedClumsyProduct = myMemoizedClumsy(clumsyProduct);
// console.time("First call");
// console.log(memoizedClumsyProduct(9988,8877)); // Output: 88630396 // First call: 25.917ms
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoizedClumsyProduct(9988,8877)); // Output: 88630396 // Second call: 0.409ms
// console.timeEnd("Second call");

// Currying in js
// Currying is a function that takes one argument at a time and returns a new function expecting 
// the next argument. It is a conversion of functions from callable as f(a,b,c)into callable
// as f(a)(b)(c).

function f(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
logger = f(1)(2)(3);
console.log(logger);
9// Currying in js
// Currying is a function that takes one argument at a time and returns a new function expecting 
// the next argument. It is a conversion of functions from callable as f(a,b,c)into callable
// as f(a)(b)(c).

//Q1 how do you implement sum(1)(2)(3) ?

// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c;
//     }
//   }
// }

// let logger = sum(1)(2)(3);
// console.log(logger); // Output: 6

// const sum = a => b => c=> a+b+c;
// logger = sum(1)(2)(3);
// console.log(logger); // Output: 6

//Q2 Evaluate ("Sum")(4)(6) => 10
//   Evaluate ("Multiply")(4)(6) => 24
//   Evaluate ("Divide")(4)(6) => 0.6666666666666666
//   Evaluate ("Subtract")(4)(6) => -2

// function calculator(operation){
//   return function(a){
//     return function(b){
//       if(operation === "Sum"){
//         return a+b;
//       }else if(operation === "Multiply"){
//         return a*b;
//       }else if(operation === "Divide"){
//         return a/b;
//       }else if(operation === "Subtract"){
//         return a-b;
//     }else{
//       return "Invalid Operation"
//     }
//   }
//   }
// }

// logger = calculator("Sum")(4)(6);
// console.log(logger); // Output: 10

// Q3 Infinite Currying

function add(a){
  return function(b){
    if (b) return add(a+b); 
    return a;
  }
}


console.log(add(5)(2)(3)(4)(5)()); // Output: 19

//The solution: Promise Pool (Controlled Concurrency)
//Instead of firing everything at once, I switched to batch-based processing:
async function processUsers(users) {
  const batchSize = 5;

  for (let i = 0; i < users.length; i += batchSize) {
    const batch = users.slice(i, i + batchSize);

    await Promise.all(
      batch.map(user => fetch(`/api/users/${user.id}`))
    );
  }
}
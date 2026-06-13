9// Currying in js
// Currying is a function that takes one argument at a time and returns a new function expecting 
// the next argument. It is a conversion of functions from callable as f(a,b,c)into callable
// as f(a)(b)(c).

//Q1 how do you implement sum(1)(2)(3) ?

function sum(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}

let logger = sum(1)(2)(3);
console.log(logger); // Output: 6
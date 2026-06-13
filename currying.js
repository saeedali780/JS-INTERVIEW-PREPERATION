9// Currying in js
// Currying is a function that takes one argument at a time and returns a new function expecting 
// the next argument. It is a conversion of functions from callable as f(a,b,c)into callable
// as f(a)(b)(c).

function evaluate(a){
  return function(b){
    return function(c){
      return a+b+c;
    } 
  }
}

console.log(evaluate(1)(2)(3)); // 6

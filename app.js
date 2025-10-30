// ==== HOISTING IN JS ====

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase before the code is executed. This means that you can use variables and functions before they are declared in the code.

// Example of variable hoisting with var
// console.log(myVar); // Output: undefined
// var myVar = 10;
// console.log(myVar); // Output: 10

// Example of function hoisting

// myFunc()

// var myFunc = function() {
//     console.log("Fisrt");
// }
// myFunc();
// function myFunc() {
//     console.log("Second");
// }
// myFunc();

// var variable = 5;
// console.log(variable);

// (() => {
//   console.log(variable);
//   variable = 10;
// })();
// console.log(variable);

// for(var i=0;i<10;i++){
//   setTimeout(() => {console.log(i);}, 0)
// }

var fullName = "John Doe";

var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function() {
      return this.fullName;
    }
  },
  getFullName: function() {
    return this.fullName;
  },

  getFullName2: () => {
    return this.fullName;
  },

  getFullName3: (function() {
    return this.fullName
  
})(),
};
console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullName2());
console.log(obj.getFullName3);
// this keyword in js 
// this keyword refers to the object that is executing the current function. 
// It can refer to different objects depending on how the function is called.

this.a = 10;
// console.log(this.a); // Output: 10

function myFunction() {
    console.log(this.a);
}
myFunction(); // Output: undefined (in strict mode) or 10 (in non-strict mode)
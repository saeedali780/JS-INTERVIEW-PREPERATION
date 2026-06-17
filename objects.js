// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// console.log(obj.name); // Output: John
// console.log(obj['age']); // Output: 30

const func = (function(a,b) {
    delete a;
    return a;
})("Hello", "World");
console.log(func); // Output: Hello
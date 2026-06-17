// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// console.log(obj.name); // Output: John
// console.log(obj['age']); // Output: 30

// const func = (function(a,b) {
//     delete a;
//     return a;
// })("Hello", "World");
// console.log(func); // Output: Hello

// const user = {
//     name: 'Alice',
//     age: 25,
//     city: 'Los Angeles',
//     "Hello World": "This is a test",
// }

// console.log(user.name); // Output: Alice
// console.log(user['age']); // Output
// console.log(user["Hello World"]); // Output: This is a test`

// How we can add dynamic properties to an object How we can add dynamic properties to an object
// const propertyName = "fname";
// const value = "John";
// const user = {
//     [propertyName]: value
// }
// console.log(user.fname); // Output: John    


const user = {    name: 'Alice',
    age: 25,
    city: 'Los Angeles',
    "Hello World": "This is a test",
}

for (let key in user) {
    console.log(key + ": " + user[key]);
}
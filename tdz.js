// Temporal dead zone example in JavaScript
//  defination of a variable using 'let' or 'const' creates a temporal dead zone
// Temporal dead zone is the term to describe the state where variables are in the scope but not yet
// decleared
function example() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
    console.log(a); // 10
}
example();

// Another example with 'const'
function exampleConst() {
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 20;
    console.log(b); // 20
}
exampleConst();

// Example with function scope
function functionScopeExample() {
    {
        console.log(c); // ReferenceError: Cannot access 'c' before initialization
        let c = 30;
        console.log(c); // 30
    }
}
functionScopeExample();

// Example with block scope
{
    console.log(d); // ReferenceError: Cannot access 'd' before initialization
    const d = 40;
    console.log(d); // 40
}

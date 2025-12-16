// Question 1: write a program to check if number is positive, negative or zero. using if..else statements.

// function checkNumber(num) {
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }
// console.log(checkNumber(5));   // Positive
// console.log(checkNumber(-3));  // Negative
// console.log(checkNumber(0));   // Zero


// Question 2: write a program to find the largest of three numbers. using if..else statements.

function findLargest(a,b,c){
    if(a >= b && a>=c){
        return a
    } else if(b>=a && b>=c){
        return b
    }else{
        return c
    }
}
console.log(findLargest(1,2,3))
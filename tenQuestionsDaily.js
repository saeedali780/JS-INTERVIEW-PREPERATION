// Question 1 — Print Your Information
// 1. Variables

// Create three variables:
// name
// age
// country
// Print them in a meaningful sentence.

// const name = "Saeed Ali";
// const age = 18;
// const city = "Karachi";

// console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`);

// Q 2. Even or Odd

// Write a function:
// isEven(num)
// Return true if the number is even, otherwise false.

// function isEven(num){
//     if(num % 2 ===0){
//         return "Even: " +  num;
//     }else{
//         return "Odd: " + num;
//     }
// }
// console.log(isEven(4)); // Output: Even: 4

// Q 3. Largest Number
// Write a function:
// findLargest(a, b)
// Return the larger number.

// function findLargest(a, b){
//     if(a > b){
//         return "Largest Number is: " + a;
//     }
//     return "Largest Number is: " + b;
// }
// console.log(findLargest(10, 20)); // Output: Largest Number is: 20

// Q 4. Sum from 1 to N

// function sumToN(n){
//     let sum = 0;

//     for(let i = 1; i<= n;i++){
//         sum += i;
//     };
//     return sum;
// }
// console.log(sumToN(29));

// Q 5. Reverse a String

// function reversedStr(string){
//     let result = "";

//     for(let i = string.length - 1; i>=0;i--){
//         result += string[i]
//     }
//     return result
// }
// console.log(reversedStr("Hello"));


// Q 6. Count Vowels

// function countVowels(str){
//     let count = 0;
//     let vowels = 'aieou';

//     for(let i = 0; i< str.length;i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("helllo"));


// Q 7: FizzBuzz

// function fizzBuzz(){
//     for(let i = 1; i<=50;i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz : ", i);    
//         }else if(i % 5 ===0){
//             console.log("Buzz: ", i);
//         }else if(i % 3 === 0 ){
//         console.log("Fizz: ", i);
//     }else{
//         console.log("Something else: " , i);
        
//     }
//     }
// }
// fizzBuzz()


// Q 8. Multiplication Table

// function table(num){
//     for(let i = 1; i<=10;i++){
//         console.log(`${num} x ${i} = ${num*i}`);
//     }
// }
// table(2)


// Q 9. Palindrome

// Write a function:
// isPalindrome(str)
// Return true if the string is a palindrome, otherwise false.
// Do not use reverse().

function isPalindrome(str){
    let reversedStr = "";

    for(let i = str.length - 1; i>=0;i--){
        reversedStr += str[i]
    }
    if(reversedStr === str){
        return true;
    }else{
        return false
    }
    
}
console.log(isPalindrome("madam"));

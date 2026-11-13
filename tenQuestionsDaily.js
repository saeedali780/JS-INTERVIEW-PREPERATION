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

// function isPalindrome(str){
//     let reversedStr = "";

//     for(let i = str.length - 1; i>=0;i--){
//         reversedStr += str[i]
//     }
//     if(reversedStr === str){
//         return true;
//     }else{
//         return false
//     }
    
// }
// console.log(isPalindrome("madam"));


// Q 10. Grade Calculator

// Write a function:
// guessGrade(marks)
// Return:
// A+ → 90–100
// A → 80–89
// B → 70–79
// C → 60–69
// D → 50–59
// Fail → Below 50

// function guessGrade(marks){
//     if(marks < 0 || marks > 100){
//         console.log("please enter between 0 to 100", marks);
//     }else if(marks >= 90){
//           console.log("You Secured A+ & your marks are :", marks);
//     }
//     else if(marks >= 80){
//         console.log("You Secured A & your marks are :", marks);
//     }else if(marks >= 70){
//         console.log("You Secured B & your marks are :", marks);
//     }else if(marks >= 60){
//          console.log("You Secured C & your marks are :", marks);
//     }else if(marks >= 50 ){
//          console.log("You Secured D & your marks are :", marks);
//     }else if(marks <50){
//         console.log("Ops your failed & your marks are :", marks);
//     }
// }   
// guessGrade(-65)

// 13-11-2026 Ten Questions Daily

// Q1. Reverse a String

// function reverseString(str){
//     let result = "";

//     for(let i  =  str.length - 1 ; i>=0; i--){
//         result += str[i];
//     }
//     return result;
// }
// console.log(reverseString("Hey Saeed"))

// Q2. Palindrome Checker

// function isPalindrome(str) {
//     let lowerStr = str.toLowerCase();
//     let result = reverseString(lowerStr);

//     if (result === lowerStr) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome("Madam"));   // true
// console.log(isPalindrome("Hello"));   // false
// console.log(isPalindrome("RaceCar")); // true

// Q3: Find the Largest Number

// function findLargest(numbers) {
//     let largest = numbers[0];
//     for (let i = 1; i< numbers.length; i++) {
//         if(numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
//     return largest;

// }
// console.log(findLargest([10, 20, 5, 30, 15])); // Output: 30

// Q4: Remove Duplicates from an Array

// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // Output: [1, 2, 3, 4, 5]

// Q5: Count Vowels in a String

function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // Output: 3
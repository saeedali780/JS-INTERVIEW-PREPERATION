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

// function findLargest(a,b,c){
//     if(a >= b && a>=c){
//         return a
//     } else if(b>=a && b>=c){
//         return b
//     }else{
//         return c
//     }
// }
// console.log(findLargest(1,2,3))

// Question 3: Create a program that detemines the grade of a student based on marks:
//  90 - 100: A+
//  80 - 89: A
//  70 - 79: B
//  60 - 69: C
//  Below 60: F

// function stMarks(marks){
//     if(marks >= 90 && marks <= 100){
//         return "A+"
//     }else if(marks >= 80 && marks <= 89){
//          return "A"
//     }else if(marks >= 70 && marks <= 79){
//          return "B"
//     }else if(marks >= 60 && marks <= 69){
//          return "C"
//     }else{
//         return "F"
//     }
// }
// console.log(stMarks(10))

// Question 4: Write a program to check if a year is a leap year or not.

// function isLeapYear(year){
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         return "Leap Year"
//     }else{
//         return "Not a Leap Year"
//     }
// }
// console.log(isLeapYear(2020))  // Leap Year
// console.log(isLeapYear(1900))  // Not a Leap Year
// console.log(isLeapYear(2000))  // Leap Year
// console.log(isLeapYear(2026))  // Not a Leap Year

// Question 5: Write a program to check if a character is a vowel or consonant digit or special character using nested if..else statements.

function checkCharacter(char){
    if(char.length !== 1){
        return "Please enter a single character"
    }else{
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
            // It's an alphabet
            let lowerChar = char.toLowerCase();
            if(lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u'){
                return "Vowel"
            }else{
                return "Consonant"
            }
        }else if(char >= '0' && char <= '9'){
            return "Digit"
        }else{
            return "Special Character"
        }
    }
}
console.log(checkCharacter('a'))  // Vowel
console.log(checkCharacter('B'))  // Consonant
console.log(checkCharacter('5'))  // Digit
console.log(checkCharacter('@'))  // Special Character
console.log(checkCharacter('ab')) // Please enter a single character
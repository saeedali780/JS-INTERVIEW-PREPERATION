// Conditional statements
// Q1 Write a program to check if a number is positive, negative, or Zero using if-else statements.

// function isPositiveOrNegative(num){
//     if(num >1){
//         console.log("The Number is Positve: " + num);        
//     }else if(num < 0){
//         console.log("The Number is Negtive: " + num);      
//     }
//     else{
//         console.log("The Number is Zero: " + num);      
//     }
// }
// isPositiveOrNegative(-1)


// Q2 Write a program that takes three number and find the largest among them using nested if-else statemnets.

// function largestNumFinder(a,b,c){
//    if(a >= b && a>=c){
//     return a;
//    }else if(b >=a && b>=c){
//     return b;
//    }else{
//     return c;
//    };
// };
// console.log(largestNumFinder(1,4,3));


// Q3 Create a program that determines the grade of a student based on marks.

// function studentGrade(marks){
//     if(marks > 100 || marks < 0) console.log("Invalid Marks");
//     if(marks >= 90) console.log("A+");
//     else if(marks >=80) console.log("A");
//     else if(marks >=70) console.log("B");
//     else if(marks >= 60) console.log("C");
//     else if(marks < 60) console.log("F");
//     else console.log("Error : Marks should be Entered in Number!");
// }
// studentGrade(80);

// Q4 Write a program to check if a year is a leap year or not.

// function isLeapYear(year){
//    if(year % 4 === 0  && year % 100 !== 0 || (year % 400 === 0)) console.log("This Year is Leap: " + year);
//    else console.log("This Year is not Leap: " + year);
// }
// isLeapYear(2024)

// Q5 Create a program that takes a character as input and checks if it is a vowel or consonant or special character.

// function checkCharacter(char){
//     if(typeof char !== "string" || char.length !== 1) {
//         console.log("Invalid Input: Single String Character Expected.");
//     }else if(/[aeiouAEIOU]/.test(char)){
//          console.log("The Character is Vowel: " + char);
//     }else if(/[a-zA-Z]/.test(char)){
//         console.log("The Character is Constant: " + char);
//     }else{
//         console.log("The Character is Special: " + char);
//     }
// }
// checkCharacter("a"); 
// checkCharacter("B");
// checkCharacter("@");
// checkCharacter("ab");
// checkCharacter(1);

//Q6 Write a program that calculates the electricity bill based on unint consumed.

// function calculateElectricityBill(unit){
//     let totalBill = 0;

//     if(typeof unit !== "number" || isNaN(unit)){
//         console.log("Invalid Input");
//     }
//     else if(unit < 0){
//         console.log("Invalid Units");
//     }
//     else if(unit === 0){
//         console.log("The Unit is Zero: " + unit);
//     }
//     else if(unit <= 100){
//         totalBill = unit * 5;
//     }
//     else if(unit <= 200){
//         totalBill = 100 * 5 + (unit - 100) * 7;
//     }
//     else if(unit <= 300){
//         totalBill = 100 * 5 + 100 * 7 + (unit - 200) * 10;
//     }
//     else{
//         totalBill = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 15;
//     }

//     if(unit > 0) console.log("Total Bill: " + totalBill);
// }
// calculateElectricityBill(50);   // Total Bill: 250
// calculateElectricityBill(150);  // Total Bill: 850
// calculateElectricityBill(250);  // Total Bill: 1500
// calculateElectricityBill(350);  // Total Bill: 2750
// calculateElectricityBill(-10);  // Invalid Units
// calculateElectricityBill("abc"); // Invalid Input
// calculateElectricityBill(0);    // The Unit is Zero: 0

// Q7 Write a program that checks if a number is divisible by 3, 5 using nested if else.

// function isDivisible(num){
//     if(num % 3 === 0 && num % 5 ===0) console.log("The Number is Divisible by 3,5 : " + num);
//     else if(num % 3 === 0)  console.log("The Number is Divisible by 3 : " + num);
//     else if(num % 5 === 0)  console.log("The Number is Divisible by 5 : " + num);
//     else console.log("Number is not Divisible By 3,5");
// };
// isDivisible(2)

// Q8 Create a simple calculator that performs +,-,*,/ operations. Use if else & handle zero division.

// function calculator(operator,num1,num2){
//     if(operator === "+") console.log(num1 + num2);
//     else if(operator === "-") console.log(num1 - num2);
//     else if(operator === "*") console.log(num1 * num2);
//     else if(operator === "/" && num1 > 0 && num2 >0 ) console.log( num1 / num2);
//     else console.log("The Number is not Divisible By Zero");
// }
// calculator("+",2,2);
// calculator("-",2,2);
// calculator("*",2,2);
// calculator("/",2,2);
// calculator("/",2,0);

// Q9 Write a program that takes day number (1-7) and prints the day name.

// function printDayName(dayNo){
//     if(dayNo >0 && dayNo ===1) console.log("Today is Monday: " + dayNo);
//     else if(dayNo === 2) console.log("Today is Tuesday: " + dayNo);
//     else if(dayNo === 3) console.log("Today is Wendsday: " + dayNo);
//     else if(dayNo === 4) console.log("Today is Thursday: " + dayNo);
//     else if(dayNo === 5) console.log("Today is Friday: " + dayNo);
//     else if(dayNo === 6) console.log("Today is Saturday: " + dayNo);
//     else if(dayNo === 7) console.log("Today is Sunday: " + dayNo);
//     else console.log("Day No is not between 1-7");
// }
// printDayName(3)


// String Manipulation (Without Buil-in Functions).

// Q10 Write a program to find the length of the string without using built-in function.

// function findLength(string){
//     let length  = 0;
//     for(str of string){
//         length++;
//     }
//     console.log(length);
// }
// findLength("Biztech")

// Q11 Create a program to reverse a string without using built-in function. The Test the string "IBA-MPK".

// function reverseString(str){
//     if(typeof str !=="string"){
//         console.log("Invalid Input: Please Enter String only!");
//         return;
//     }
//     let reveresedStr = "";
//     for(let i = str.length - 1 ;i>=0; i--){
//         reveresedStr += str[i];
//     }
//     console.log(reveresedStr);
// }

// reverseString("IBA-MPK");

//Q12 Write a program to check if a string is palindrome without using built-in function.

// function isPalindrome(str){
//     let reveresedStr = "";
//     for(let i = str.length - 1 ;i>=0; i--){
//         reveresedStr += str[i];
//     };

//     if(reveresedStr === str) console.log("The String is Palindrome : " + str);
//     else console.log("The String is not Palindrome : " + str);   
// }
// isPalindrome("Hello");
// isPalindrome("madam");

// Q13 Create a program to count the number of vowels and constants in the string "Biztek IBA-MPK Speed Programming" without using built in function.

// function countVowels(str){
//     let vowels = 0;
//     let constant = 0;
//     for(let i  = 0; i<str.length;i++){
//         let char = str[i].toLowerCase();
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             vowels++;
//         }else{
//             constant ++
//         }
//     }
//     console.log("The Vowels are : " + vowels + " And The constants are : " + constant);
// }

// countVowels("Biztek IBA-MPK Speed Programming")

// Q14 Write a program to compare two string without using built-in function. Compare "Biztek" and "IBA-MPK".

// function compareTwoStrings(str1,str2){
//     if(str1 !== str2) console.log("Strings are Not Same!");
//     else console.log("Strings are Same!");
// };
// compareTwoStrings("Biztek","Biztek");
// compareTwoStrings("Biztek","IBA-MPK");

// Q15 Write a program to  copy one string to another without using built-in function.

// function duplicateString(str){
//     copied = "";
//     for(let i = 0; i<str.length;i++){
//         copied += str[i];
//     }
//     console.log(copied);
//     console.log(str);
    
// }

// duplicateString("Hello")


// Q16 Write a program to concatenate two strings without using built-in function.

// function concatenateStrings(str1,str2){
//     let concatenated = "";
//     for(let i  = 0; i< str1.length;i++){
//         concatenated += str1[i];
//     }
//     for(let j = 0; j<str2.length;j++){
//         concatenated += str2[j];
//     }
//     console.log(concatenated);
    
// }
// concatenateStrings("Hello","Saeed");

// Q17 Create a program to convert all lowercase letters to uppercase in the string "biztek speed programming" without using built-in function.

// function upperCase(str){
//     let upperCased = "";
//     for(let i = 0; i<str.length;i++){
//         let char = str[i];
//         if(char >= "a" && char <="z"){
//             upperCased += String.fromCharCode(char.charCodeAt(0) - 32);
//         }else{
//             upperCased += str[i]
//         }
//     }
//     console.log(upperCased);
    
// }
// upperCase("biztek speed programming")

// Q18 Write a program to count the frequency of each character in "IBA-MPK" without using built-in functions.

// function checkFrequency(str){
//     let freq = {};
//     for(let i = 0;i<str.length;i++){
//         let char = str[i]
//         if(freq[char]){
//             freq[char]++;
//         }else{
//             freq[char] = 1
//         }
//     }
//     console.log(freq); 
// }
// checkFrequency("Hello")

// Q19 Create a program to remove all the whitespace from a string "Biztek IBA-MPK Speed Programming" without using built-in function.

// function removeWhiteSpace(str){
//    let result = "";
//    for(let i = 0; i<str.length;i++){
//     let char = str[i];
//     if(char !== " "){
//         result += str[i]
//     }
//    }
//    console.log(result);
   
// }

// removeWhiteSpace("Biztek IBA-MPK Speed Programming")

// Array Problems 1D,2D,
// Q20 Write a program to find the sum and average of elements in a 1D array.

// function findSumAndAeverage(arr){
//     let sum = 0;
//     let count = 0;
//     for(let i = 0;i<arr.length;i++){
//         sum += arr[i];
//         count++
//     }
//     console.log("The Sum of Array Elements: " + sum);

//     let average = sum/count;
//     console.log("The average of Array Elements: " + average);
// }
// findSumAndAeverage([1,2,3,4,5,23])


// Q21 Create a program to find thr largest and smallest elements in a 1D array.

// function findLargestNum(arr){
//     let largest = arr[0];
//     let smallest = arr[0];
//     for(let i  = 1; i<arr.length;i++){
//         if(arr[i] > largest) largest = arr[i];
//         if(arr[i] < smallest) smallest = arr[i];
//     }
//     console.log("The Largest Number is: " + largest);
//     console.log("The Smallest Number is: " + smallest);
// }
// findLargestNum([1,2,3,4,5,23,0])



// Q22 Write a program to reverse ana array without using extra space(in-place reversal).
// Original Array = [1,2,3,4,5];
// Reversed Array = [5,4,3,2,1];

// function reverseArray(arr){
//     let reversed = [];
//     for(let i  = arr.length - 1; i>=0;i--){
//     reversed.push(arr[i])
//     }
//     console.log("Original Array: " + arr);   
//     console.log("Reversed Array: " + reversed);   
// }
// reverseArray([1,2,3,4,5])


// Q23 Create a program to check if an array  is sorted in asending order.

// function isSorted(arr){
//     for(let i = 0; i<arr.length - 1;i++){
//         if(arr[i] > arr[i+1]) return false;
//     }
//     return true;
// }
// console.log(isSorted([1,2,3,4,5]));  // true
// console.log(isSorted([1,2,5,4,3]));  // false





//

for(let i = 0;i<20;i++){
    console.log(i);
}
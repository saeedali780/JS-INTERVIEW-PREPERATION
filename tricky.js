// // reverse a string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello")); // Output: "olleh"

// // count vowels in a string

// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("hello world")); // Output: 3

// // Sum of array
// function sumArray(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// // Find max in array
// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([1, 2, 3, 4, 5,10])); // Output: 5


// // Remove duplicates from array
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// // find longest word in a string
// function findLongestWord(str) {
//     const words = str.split(" ");
//     let longest = "";
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"

// Reverse a string

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello")); // Output: "olleh"

// function CountVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let count = 0;
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count; 
// }
// console.log(CountVowels("hello world")); // Output: 3

// Count consonants in a string

// function CountConsonants(str){
//     let vowels = "aeiouAEIOU"
//     let count = 0
//     for(let char of str){
//         if(!vowels.includes(char) && /[a-zA-Z]/.test(char)){
//             count++
//         }
//     }
//     return count
// }
// console.log(CountConsonants("Jerry"))

// Check if string is palindrome

// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//     const reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("Anna")); // Output: true

// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-zA-z0-9]/g,"").toLowerCase()
//     const reversedStr = cleanedStr.split("").reverse().join("")
//     return cleanedStr === reversedStr
// }

// console.log(isPalindrome("Jerry"));

// Convert string to uppercase
// function UpperCase(str) {
//     return str.toUpperCase()
// }
// console.log(UpperCase("hello"));

// // 
// function LowerCase(str) {
//     return str.toLowerCase()
// }
// console.log(LowerCase("HELLOO"));

// Capitalize first letter of each word

// function Capitalizer(str){
//     return str.chartAt(0).toUpperCase() + str.slice(1).toLowerCase()
// }
// console.log(Capitalizer("hello"));

// Count number of words in a sentence
// function countWords(str) {
//     const words = str.trim().split(/\s+/);
//     return words.length;
// }
// console.log(countWords("Hello world, this is a test.")); // Output: 6

//Find length of string without using .length

// function stringLength(str) {
//     let count = 0;  
//     for (let char of str) {
//         count++;
//     }
//     return count;
// }
// console.log(stringLength("hello")); // Output: 5

//Replace all spaces with -
// function replaceSpaces(str) {
//     return str.replace(/ /g, "-");
// }
// console.log(replaceSpaces("hello world this is a test")); // Output: "hello-world-this-is-a-test"
// Remove all spaces from string
// function removeSpaces(str) {
//     return str.replace(/ /g, "");
// }
// console.log(removeSpaces("hello world this is a test")); // Output: "helloworldthisisatest"

// Find frequency of a character
// function charFrequency(str, char) {
//     let count = 0;
//     for (let c of str) {
//         if (c === char) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(charFrequency("hello world", "o")); // Output: 2

// Check if two strings are anagrams

// function areAnagrams(str1, str2) {
//     const formatStr = (str) => str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").sort().join("");
//     return formatStr(str1) === formatStr(str2);
// }
// console.log(areAnagrams("listen", "silent")); // Output: true

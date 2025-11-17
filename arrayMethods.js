// Map, Filter, Reduce
// What is map()?
// Map methods is used to create a new array from existing one by applying a function on each
// of array element of the 1st array.

// const nums = [1,2,3,4,5]

// let result = nums.map((el)=>{
//     return el *2
// })
// console.log(result);


// var map = function(arr,fn){
//     result = []
//     for(let i = 0; i<arr.length;i++){
//         result.push(fn(arr[i]))
//     }
//     return result
// }

// function multiply(nums){
//     return nums *2
// }

// let results = map(nums,multiply)
// console.log(results);


// What is filter()?
// Filter Methods takes each element of an array and it applies conditional statements against it
// if condition returns true the elements get pushed into the output array.

// let nums = [1,2,3,4,5];

// results = nums.filter((el)=>{
//     return el > 2
// })

// console.log(results);

// var filter = function(arr,fn){
//     result = [];
//     for(let i = 0;i<arr.length;i++){
//         if (fn(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// function isGreaterThanTwo(num){
//     return num > 2;
// }
// results = filter(nums,isGreaterThanTwo)
// console.log(results);

// What is reduce()?
//The reduce() method takes an array and combines all its elements into a single value by repeatedly applying a function.
//It processes each element one by one and keeps updating a result called the accumulator.
//At the end, it returns one final value.


// let nums = [1,2,3,4,5];
// let init = 0;
// const reduce = function(nums,fn,init){
//     let acc = init
//     for(let i = 0; i< nums.length;i++){
//         acc = fn(acc,nums[i])
//     }
//     return acc
// }

// function fn(acc,val){
//     return acc  + val
// }
// let results = reduce(nums, fn, init);
// console.log(results); 

// output based questions

let students = [
    {name:"saeed",marks:200,age:18},
    {name:"ali",marks:100,age:19},
    {name:"jerry",marks:80,age:20},
    {name:"khan",marks:60,age:22},
]

var map = function(arr, fn){
    let studentss = [];
    for (let i = 0; i < arr.length; i++) {
        studentss.push(fn(arr[i]));
    }
    return studentss;
}

function fn(item){
    // return full object, name updated
    return {
        ...item,
        name: item.name.charAt(0).toUpperCase() + item.name.slice(1)
    }
}

let result = map(students, fn)

var filter = function(arr, fn){
    let filtered = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            filtered.push(arr[i])
        }
    }
    return filtered
}

function fn2(item) {
    return item.marks >= 100 && item.age >= 18
}

let results = filter(result, fn2)
console.log(results);
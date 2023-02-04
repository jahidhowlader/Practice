/* 
function countTrue(arr) {
	let result = 0
    for( let i = 0; i < arr.length; i++){
        if(arr[i] === true){
            result += 1
        }
    }
    return result
}

const result = countTrue([true, true, false, false, false, false, true, false, true, true, false, true])
console.log(result);
*/

// /////////////////////////////////////

/* 
function toArray(object){
    let arr = []
    for(let i in object){
        arr.push([i, object[i]])
    }
    return arr
}

const result = toArray({})
console.log(result);
*/

// Concatenate Variable Number of Input Arrays
/* 
function concat(...args) {
	return args.flat()
}

const result = concat([1, 2, 3], [4, 5], [6, 7], [2,4,9])
console.log(result);\

---------------------------
alternative of Array.flat()
---------------------------
function concat(...args) {
    let arr = []
	for(let i = 0; i < args.length; i++){
        for(let j = 0; j < args[i].length; j++){
            arr.push(args[i][j])
        }
    }
    return arr
}

const result = concat([1, 2], [3, 4]) 
console.log(result);
*/









// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
/*
function arrayOfMultiples (num, length) {
    let arr = []
	let multiples = 1
    for(let i = 1; i <= length; i++){
        multiples = num * i
        arr.push(multiples)
    }
    return arr
}

const result = arrayOfMultiples(140, 3) //[ 140, 280, 420 ]
console.log(result);
*/  







// Mirror Array
// Given an integer array, transform that array into a mirror.
/*
function mirror(arr) {
	let result = arr
    for(let i = arr.length - 2; i >= 0; i--){
        result.push(arr[i])
    }
    return result
}

const result = mirror([1,2,3,4,5]) // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(result);
*/







// Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!". 
// If you can't find Nemo, return "I can't find Nemo :(".
/*
function findNemo(sentence) {
    let word = sentence.split(' ')
    let count;
    for(let i = 0; i < word.length; i++){
        if(word[i] === 'Nemo'){
            count = i + 1
        }
    }
    return count > 0 ? "I found Nemo at " + count + "!" :  "I can't find Nemo :(" 
}

const result = findNemo("I am finding Nemo !")   // I found Nemo at 4!
console.log(result);
*/






// Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
/*
function numbersSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            sum += arr[i]
        }
    }
    return sum
}

const result = numbersSum([true, false, "123", "75"])
console.log(result);
*/






// Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
/*
function totalVolume(...boxes) {
    let sum = 0
    for(let i = 0; i< boxes.length; i++){
        let multiples = 1
        for(let j = 0; j < boxes[i].length; j++){
            multiples *= boxes[i][j]
        }
        sum += multiples
    }
    return sum
}

const result = totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])
const result2 = totalVolume([2, 2, 2], [2, 1, 1])
console.log(result);
console.log(result2);
*/
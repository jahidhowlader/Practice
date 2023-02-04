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

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
function concat(...args) {
	return args.flat()
}

const result = concat([1, 2, 3], [4, 5], [6, 7], [2,4,9])
console.log(result);
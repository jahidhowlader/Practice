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
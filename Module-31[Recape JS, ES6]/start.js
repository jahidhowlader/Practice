// Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

const triangle = n => {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i
    }
    return result
}

console.log(triangle(6));
console.log(triangle(215));






// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

const arrayOfMultiples = (num, length) => {
    let result = []
    for(let i = 1; i <= length; i++ ){
        result.push(num * i)
    }
    return result
}

console.log(arrayOfMultiples(17, 6));
console.log(arrayOfMultiples(12, 10));





// Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.
const reverseWords = str => {
    let trimStr = str.trim()
    let splitStr = trimStr.split(' ')
    let result = []
    for(const word of splitStr){
        if(word !== ''){
            result.push(word)
        }
    }
    return result.reverse().join(' ')
}

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
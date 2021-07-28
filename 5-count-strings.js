/**
 * produces a array of string lengths for each string in the array
 * 
 * @param {string[]} arr the array of strings
 * @returns {number[]} the length of each string in the array is returned
 */
function countStrings(arr){
    const cleanarr=arr.map(countLength)
    return cleanarr
}

function countLength(word){
    return word.length
}
console.log(countStrings(["one", "two", "three", "four"]),`[3, 3, 5, 4]`)
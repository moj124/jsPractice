
/**
 * returns a formatted string of greetings given the array of names
 * 
 * @param {string[]} arr the array of string preferably names
 * 
 * @returns {string[]} gives greetings to each name in arr
 */
function addGreetings(arr){
    const cleanarr = []
    for (word of arr){
        cleanarr.push(`Hello, ${word}!`)
    }

    return cleanarr
}

console.log(addGreetings(["Ash", "Beth", "Ciara"]),`["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]`)
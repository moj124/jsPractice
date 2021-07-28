// function:
// =========
// name: tolowerlist

// parameter arr: Array<string>

// return: Array<string>

// pseudo code:
// ============
// for idx of arr:
//     set arr[idx] to lowercase string

// return arr

// test cases:
// ===========
// toLowerList(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]) should be ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
// toLowerList(['heLlo','GOOD','no Thanks']) should be ['hello','good','no thanks']
// toLowerList([]) should be []

/**
 * Return a new array of lowercased strings
 * 
 * @param {Array<string>} arr - the array of strings
 * @returns {Array<string>} the lowercase versions of the strings
 */
function toLowerList(arr){
    const cleanarr=[]

    for (let word of arr){
        console.log(word)
        cleanarr.push(arr[arr.indexOf(word)].toLowerCase())
    }

    return cleanarr
}
console.log(toLowerList(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]), `should be ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]`)
console.log(toLowerList(['heLlo','GOOD','no Thanks']), `should be ['hello','good','no thanks']`)
console.log(toLowerList([]), `should be []`)
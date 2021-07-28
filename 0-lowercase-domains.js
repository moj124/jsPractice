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

function toLowerList(arr){
    for (let word of arr){
        console.log(word)
        arr[arr.indexOf(word)] = arr[arr.indexOf(word)].toLowerCase()
    }

    return arr
}
console.log(toLowerList(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]), `should be ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]`)
console.log(toLowerList(['heLlo','GOOD','no Thanks']), `should be ['hello','good','no thanks']`)
console.log(toLowerList([]), `should be []`)
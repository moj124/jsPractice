
function addGreetings(arr){
    const cleanarr = []
    for (word in arr){
        cleanarr.push(`Hello, ${word}!`)
    }

    return cleanarr
}

console.log(addGreetings(["Ash", "Beth", "Ciara"]),`["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]`)

function addGreetings(arr){
    const cleanarr = []
    for (word of arr){
        cleanarr.push(`Hello, ${word}!`)
    }

    return cleanarr
}

console.log(addGreetings(["Ash", "Beth", "Ciara"]),`["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]`)

function invertNumbers(arr){
    const cleanarr=arr.map(invert)
    return cleanarr
}

function invert(num){
    return num * -1
}

console.log(invertNumbers([1, -3, 2, 8, -10]),`[-1, 3, -2, -8, 10]`)
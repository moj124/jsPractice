
function invertNumbers(arr){
    const cleanarr=[]
    for (num of arr){
        cleanarr.push(num * -1)
    }

    return cleanarr
}
console.log(invertNumbers([1, -3, 2, 8, -10]),`[-1, 3, -2, -8, 10]`)
`use strict`;

/**
 * Returns the objects of string and number represenations
 * 
 * @param {number[]} arr the array of numbers
 * @returns {object[]} returns a array of objects string and number represenations
 */
function numberString(arr){
    let cleanarr =[]
    for(num of arr){
        cleanarr.push({'asNumber':num,'asString':num.toString()})
    }
    return cleanarr
}

console.log(numberString([4, -3.2]),`[{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }]`)
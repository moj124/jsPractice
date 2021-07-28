`use strict`;

/**
 * returns a new array of initials of the people's names in 'arr'
 * 
 * @param {string[]} arr   the array of names of people
 * @returns {string[]} the initials of each name
 */
function onlyInitial(arr){
    const cleanarr=arr.map(getInitials)
    return cleanarr
}

function getInitials(name){
    let str=''
    for(word of name.split(' ')){
        str+=word[0].toUpperCase()+'.'
    }
    return str
}

console.log(onlyInitial(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]),`["A.K.", "L.H.", "Y.M."]`)
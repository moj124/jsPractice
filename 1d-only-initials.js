`use strict`;

/**
 * returns a new array of initials of the people's names in 'arr'
 * 
 * @param {string[]} arr   the array of names of people
 * @returns {string[]} the initials of each name
 */
function onlyInitial(arr){
    const cleanarr=[]
    for(nam of arr){
        const words = nam.split(' ')
        let str = ''
        for (word of words){
            str+=word[0].toUpperCase()+'.'
        }
        cleanarr.push(str)
    }
    return cleanarr
}

console.log(onlyInitial(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]),`["A.K.", "L.H.", "Y.M."]`)
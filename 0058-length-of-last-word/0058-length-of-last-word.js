/**
 * @param {string} s
 * @return {number}
 */

const s = "   fly me   to.   the moon  "
var lengthOfLastWord = function(s) {
    //trim replaces the white space on both ends
    const array = s.trim().split(" ")
    console.log(array)
    return array[array.length-1].length
};
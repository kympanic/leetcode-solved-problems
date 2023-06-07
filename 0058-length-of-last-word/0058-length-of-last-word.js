/**
 * @param {string} s
 * @return {number}
 */

const s = "   fly me   to.   the moon  "
var lengthOfLastWord = function(s) {
    const array = s.trim().split(" ")
    return array[array.length-1].length
};
/**
 * @param {string} s
 * @return {number}
 */

const s = "   fly me   to.   the moon  "
var lengthOfLastWord = function(s) {
    s = s.replace(/^\s+|\s+$/g,'');
    const array = s.split(" ")
    return array[array.length-1].length
};
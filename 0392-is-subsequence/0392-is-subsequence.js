/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false
    
    let counter = 0;
    //we loop through t and everytime we get a letter that matches with s[counter] we will add to counter
    for(let char in t){
        if(s[counter] ===t[char])counter++
    }
    //return if length of s === the counter
    return counter === s.length
};

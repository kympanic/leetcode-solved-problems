/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let ans = 0; 
    for (let i = 1; i < s.length; ++i)
        ans += Math.abs(s[i].charCodeAt(0) - s[i-1].charCodeAt(0)); 
    return ans; 
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false
    // at the end if subsequence and t_length are equal, than it is true, otherwise false
    const t_length = t.length;
    let subsequence = 0;
    for(let i = 0; i < t_length; i++){
        // increase subsequence everytime the letter at index matches index at string t
        if(s[subsequence] === t[i]){
            subsequence++
        }
    }
    return subsequence === s.length;
};

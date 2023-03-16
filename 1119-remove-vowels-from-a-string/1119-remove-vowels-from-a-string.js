/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    const noVowels = s.replace(/[aeiou]/gi,'')
    return noVowels
};


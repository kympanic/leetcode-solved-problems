/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//we will use the frequency counter method
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let char of s){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for(let char of t){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
};


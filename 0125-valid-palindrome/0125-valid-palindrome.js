/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^A-Za-z0-9]/g;
    const string = s.replace(regex, "").toLowerCase(); 
    if(string.length === 0)return true;
    
    let left = 0;
    let right = string.length - 1;
    while(left < right){
        if(string[left] === string[right]){
            left++
            right--
        }else{
            return false
        }
    }
    return true;
};
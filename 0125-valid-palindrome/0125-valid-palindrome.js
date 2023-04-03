/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   let newString = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
   for(let i = 0, j = newString.length -1; i <= j; i++, j--){
       if(newString[i] !== newString[j]) return false;
   }
       return true;
}
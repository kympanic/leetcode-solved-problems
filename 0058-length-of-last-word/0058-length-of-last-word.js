/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length
};


// var lengthOfLastWord = function(s) {
//     let i = s.length - 1
//     let count = 0
//     while(i >= 0){
//         if(s[i] === " " && count > 0){
//             return count
//         }else if(s[i] !== " ")
//             count++
//         i--
//     }
//     return count
    
// };
    
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let trimmedString = s.trim();
    let stringToArray = trimmedString.split(' ');
    let filteredArray = stringToArray.filter((value) => value);
    let reversedArray = filteredArray.reverse();
    let joinedString = reversedArray.join(' ');
    return joinedString;
};
/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function(times) {
    let newString = ""
    for(let i = 0; i < times; i++){
        newString+=this
    }
    return newString
}
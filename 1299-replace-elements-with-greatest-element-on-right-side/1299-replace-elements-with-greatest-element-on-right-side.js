/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let newArray = new Array(arr.length);
    newArray[arr.length-1] = -1;
    
    for(let i = arr.length - 1; i >= 0; i--){
        newArray[i - 1] = Math.max(arr[i],newArray[i])
    }
    return newArray
};

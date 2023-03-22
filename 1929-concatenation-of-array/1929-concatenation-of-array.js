/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArray = [];
    for(let i =0; i < nums.length; i ++){
        newArray[i] = nums[i];
        newArray[i + nums.length] = nums[i]
    }
    return newArray;
};
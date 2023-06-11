/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const newSet = new Set(nums)
   if(newSet.size !== nums.length) return true
    return false
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let seen = new Map();
    for(const num in nums){
        if(seen.has(nums[num]))return true;
        seen.set(nums[num])
    }   
    return false
};

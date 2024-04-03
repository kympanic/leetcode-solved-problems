/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     let left = 0 ;
    for(let num in nums){
        if(nums[num] !== 0){
            let temp = nums[num];
            nums[num] = nums[left];
            nums[left] = temp;
            left++;
        }
    }
    return nums;
};
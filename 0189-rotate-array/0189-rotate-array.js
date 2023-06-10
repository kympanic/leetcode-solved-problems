/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


const rotate = (nums, k) => {
    k %= nums.length
    let endOfArray = nums.splice(nums.length - k)
    nums = nums.splice(0,0, ...endOfArray)
};



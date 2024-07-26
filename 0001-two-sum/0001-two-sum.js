/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i=0,arr= [...nums]
    while(arr.length > 1){
       let n = arr.shift()
       if(arr.indexOf(target-n) != -1){
           i = nums.indexOf(n)
           return [nums.indexOf(n), nums.indexOf(target - n , i+1)]
       }
    }
};
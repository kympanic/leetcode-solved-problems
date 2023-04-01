/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeroCounts = 0;
    let left = 0;
    let right = 0;
    while (right < nums.length){
        if(nums[right] === 0){
            zeroCounts++
        }
        if(zeroCounts > k){
            if(nums[left] === 0){
                zeroCounts--;
            }
            left++;
        }
        right++;
    }
    return right-left;
};


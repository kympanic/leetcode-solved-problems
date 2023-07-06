/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //using two pointers solution
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        if(nums[left] === val){
            nums[left] = nums[right];
            right--;
        }
        else{
            left++;
        }
    }
    return left;
};


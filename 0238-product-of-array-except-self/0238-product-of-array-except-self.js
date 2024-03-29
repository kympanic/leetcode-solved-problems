/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = []
    let counter = 1
    for (let i = 0; i < nums.length; i++){
        const num = nums[i]
        result.push(counter);
        counter *= num
    }
    counter = 1
    for (let i = nums.length-1; i >= 0; i--){        
        const num = nums[i]
        result[i] = result[i]*counter;
        counter *= num
    }
    
    return result

};
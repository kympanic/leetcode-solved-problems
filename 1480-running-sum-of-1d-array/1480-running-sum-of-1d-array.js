/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums)=> {
    let newArray = [];
    newArray[0] = nums[0]
    for(let i = 1; i < nums.length;i++){
        newArray[i] = nums[i] + newArray[i-1]
    }
    return newArray
}
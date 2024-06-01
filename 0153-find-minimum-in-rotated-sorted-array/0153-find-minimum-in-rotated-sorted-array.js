/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    let l = 0
    let r = nums.length - 1

    // Base Case 1: only one element in array 
    if(nums.length === 1) return nums[0]
    // Base Case 2: Array is not sorted. Example: [1,2,3,4,5]
    if (nums[l] < nums[r]) return nums[l]

    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        } else if (nums[mid - 1] > nums[mid]) {
            return nums[mid]
        } else if (nums[mid] > nums[l]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
};
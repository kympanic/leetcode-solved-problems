/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function compareNumbers(a, b) {
  return a - b;
}

var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++){
        nums1[m+i] = nums2[i]
    }
    nums1.sort(compareNumbers)
    return
};
//O(N) Time and O(1)Space

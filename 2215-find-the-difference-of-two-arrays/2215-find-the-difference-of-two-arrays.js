/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    const ans1 = [];
    const seen1 = new Set();
    for (const num of nums1)
        if (!seen1.has(num) && nums2.find(el => el == num) == undefined) {
            ans1.push(num);
            seen1.add(num);
        }
    
    const ans2 = [];
    const seen2 = new Set();
    for (const num of nums2)
        if (!seen2.has(num) && nums1.find(el => el == num) == undefined) {
            ans2.push(num);
            seen2.add(num);
        }
    
    return [ans1, ans2];
};
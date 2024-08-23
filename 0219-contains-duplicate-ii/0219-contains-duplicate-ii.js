/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if ((hash[nums[i]] !== undefined) && (Math.abs(hash[nums[i]] - i) <= k)) {
      return true;
    } else {
      hash[nums[i]] = i;
    }
  }
  return false;
};
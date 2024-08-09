/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (N, k) => {
  let left = 0, right = N.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (N[mid] === k) return mid;
    else if (N[mid] > k) { // We need something smaller
      if (N[left] <= N[mid] && k < N[left]) left = mid + 1; // Left side sorted & exhausted, go right
      else right = mid - 1;
    } else {
      // We need something larger
      if (N[right] >= N[mid] && k > N[right]) right = mid - 1; // Right side sorted & exhausted, go left
      else left = mid + 1;
    }
  }
  return -1;
};
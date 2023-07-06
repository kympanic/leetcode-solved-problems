/**
 * @param {number[]} height
 * @return {number}
 */


var trap = function(height) {
    if(!height.length) return 0;
    let left = 0;
    let right = height.length - 1;
    let left_max = 0;
    let right_max = 0;
    let ans = 0;
    
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] > left_max) {
                left_max = height[left];
            }
            ans += Math.max(0, left_max - height[left]);
            left++;
        } else {
            if(height[right] > right_max) {
                right_max = height[right];
            }
            ans += Math.max(0, right_max - height[right]);
            right--;
        }
    }
    return ans;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxarea = 0;
    let left = 0;
    let right = height.length -1;
    while(left < right){
        let width = right - left;
        maxarea = Math.max(maxarea, Math.min(height[left], height[right]) * width)
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxarea;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    const lens = {};
    for(let n of nums){
        if(lens[n] != null) continue;
        const l = lens[n-1] || 0;
        const r = lens[n+1] || 0;
        
        const len = l + r + 1;
        lens[n - l] = len;
        lens[n] = len;
        lens[n + r] = len;

        max = Math.max(max, len);
    }
    return max
};



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const track = [];
    const sorted = candidates.sort((a, b) => a - b);
    let trackSum = 0;
    
    const backtrack = (nums, start) => {
        if(trackSum === target){
            res.push(track.slice());
            return;
        }
        if(trackSum > target) return;
        
        for(let i = start; i < nums.length; i++){
            track.push(nums[i]);
            trackSum += nums[i];
            backtrack(nums, i);
            track.pop();
            trackSum -= nums[i];
        }
    }
    
    backtrack(sorted,0);
    return res;
    
};
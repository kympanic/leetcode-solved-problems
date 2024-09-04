/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ret = [];
    let start
    let end
    function add(num) {
        // set dp variables
        if (start === undefined) {
            start = num; 
            end = num;
            return;
        }
        // if increasing, increment end
        if (num - 1 === end) {
            end = num;
            return;
        }

        // if end never incremented push val
        if (start === end) {
            ret.push(`${start}`)
        } 
        // else push start -> end range
        else {
            ret.push(`${start}->${end}`)
        }
        // reset dp variables for next value
        end = num;
        start = num;
    }

    nums.forEach(num => add(num));
    // quick hack to trigger ret.push on remaining dp variables
    add(Infinity)

    return ret;
};
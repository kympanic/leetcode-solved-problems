/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
 
  const res = intervals.reduce((acc, cur) => {
    const [s1, e1] = acc[acc.length - 1];
    const [s2, e2] = cur;
    
    if(e1 >= s2) {
      acc.pop()
      e2 > e1 ? acc.push([s1, e2]) : acc.push([s1, e1]); 
    } else {
      acc.push(cur);
    }

    return acc;
  }, [[-1, -1]]);

  return res.slice(1);
};
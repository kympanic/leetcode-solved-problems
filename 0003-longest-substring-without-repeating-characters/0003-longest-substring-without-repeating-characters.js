/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let mp = {};

    for (let j = 0, i = 0; j < s.length; j++) {
      if (mp[s[j]] > 0) {
        i = Math.max(mp[s[j]], i);
      }
      res = Math.max(res, j - i + 1);
      mp[s[j]] = j + 1;
    }
    return res;
  
};
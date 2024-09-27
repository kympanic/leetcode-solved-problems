/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
const map = {};
for (let i = 0; i < strs.length; i++) {
  const key = [...strs[i]].sort().join("")
  if (!map[key]) {
    map[key] = [];
  }
  map[key].push(strs[i]);
  
}
return Object.values(map);
};
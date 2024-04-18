/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(A) {
  let map = {}
  let largest = -1

  for (let num of A) {
    map[num] ? map[num]++ : map[num] = 1
  }

  for (let num of A) {
    if (map[num] === 1 && num > largest) largest = num
  }

  return largest
}
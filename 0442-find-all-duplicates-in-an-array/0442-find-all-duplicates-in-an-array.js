/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let counter = {}
  let results = []
  for(let val of nums){
      if(!(val in counter)){
          counter[val] = 1
      }else{
          counter[val] += 1
      }
  }

    for(let char in counter){
        if(counter[char] === 2){
            results.push(char)
        }
    }
  
  return results;
};
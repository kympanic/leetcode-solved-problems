/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

//For of loop

var reduce = function(arr, fn, initialVal) {
  let accumulator = initialVal;
  for (const element of arr) {
      accumulator = fn(accumulator, element);
  }
  return accumulator;
};

//For Each loop
// var reduce = function(arr, fn, initialVal) {
//   let accumulator = initialVal;
//   arr.forEach((element) => {
//     accumulator = fn(accumulator, element);
//   });
//   return accumulator;
// };

//For In loop
// var reduce = function(arr, fn, initialVal) {
//   let accumulator = initialVal;
//   for (const index in arr) {
//     accumulator = fn(accumulator, arr[index]);
//   } 
//   return accumulator;
// };
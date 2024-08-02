/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (A, a, b) => {
  const temp = A[a];
  A[a] = A[b];
  A[b] = temp;
};

const sortColors = (N) => {
  const pivot = 1;
  let smaller = 0, equal = 0, larger = N.length;
  while (equal < larger) {
    if (N[equal] < pivot) swap(N, equal++, smaller++);
    else if (N[equal] > pivot) swap(N, equal, --larger);
    else equal++;
  }
};
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let i = 0;

  while(k < arr.length - i) {
    let last = arr.pop();
     if ((last - x) < (x - arr[i])) {
       i++;
       arr.push(last);
     }
  }

  return arr.slice(i)
};
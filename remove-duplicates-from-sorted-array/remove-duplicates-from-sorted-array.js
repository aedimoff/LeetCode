/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
       let p2 = 0;

    for(let i = 1; i < nums.length; i++) {
      let curr = nums[i]

      if(curr !== nums[p2]) {
        p2++
        nums[p2] = nums[i]
      }

    }
    return p2 + 1 
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((total, val) => total + val)
    let currSum = 0
    
    for(let i = 0; i < nums.length; i++) {
        
        let rightSum = total - currSum - nums[i]
        
        if(rightSum === currSum) {
            return i;
        }
        
        currSum += nums[i]
    }
    return -1;
};
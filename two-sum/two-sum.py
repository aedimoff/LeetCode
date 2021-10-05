class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        
        for i in range(len(nums)):
            num = nums[i]
            diff = target - num
            if diff in seen:
                return [i, seen[diff]]
            seen[num] = i
            
            
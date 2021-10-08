class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        sum = 0
        res = []
        
        for num in nums:
            res.append(num + sum)
            sum += num
            
        return res
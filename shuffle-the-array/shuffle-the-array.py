class Solution(object):
    def shuffle(self, nums, n):
        """
        :type nums: List[int]
        :type n: int
        :rtype: List[int]
        """
        res = []
        x = nums[:n]
        y = nums[n:]
        
        i = 0
        while len(x) and len(y):
            i += 1
            if i % 2 == 0:
                res.append(y.pop(0))
            else: 
                res.append(x.pop(0))
        
        if len(x):
            res.append(x.pop())
        elif len(y):
            res.append(y.pop())
                
        return res
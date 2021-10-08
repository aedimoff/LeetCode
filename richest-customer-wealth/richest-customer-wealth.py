class Solution(object):
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        richest_guy = 0
        
        for account in accounts:
            account_total = sum(account)
            if account_total > richest_guy:
                richest_guy = account_total
        
        return richest_guy
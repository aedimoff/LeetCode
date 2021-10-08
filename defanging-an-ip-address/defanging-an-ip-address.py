class Solution(object):
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """
        ip = ""
        
        for c in address:
            if c == ".":
                ip += "[.]"
            else:
                ip += c
                
        return ip
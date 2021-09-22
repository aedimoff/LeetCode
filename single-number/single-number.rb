# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    count = Hash.new(0)
    
    nums.each { |num| count[num] += 1 }
    
    count.key(1)
end
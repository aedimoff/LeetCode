# @param {String} s
# @param {Integer[]} indices
# @return {String}
def restore_string(s, indices)
    char_keys = {}
    i = 0
    
    while i < s.length do
        char_keys[indices[i]] = s[i]
        i += 1
    end
    
    char_keys = char_keys.sort_by { |k, v| k}
    char_keys.map { |pair| pair[1]}.join
end
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let seen = new Set();
  let res = 0;
  let left = 0;

  for(let right = 0; right < s.length; right++) {
    while(seen.has(s[right])) {
      seen.delete(s[left])
      left++
    }
    seen.add(s[right])
    res = Math.max(res, right - left + 1)
  }

  return res;
}
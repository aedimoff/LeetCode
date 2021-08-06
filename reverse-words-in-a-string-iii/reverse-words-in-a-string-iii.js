/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let words = s.split(" ")
  let res = [];
  words.forEach(word => {
    res.push(word.split("").reverse().join(""))
  })
  return res.join(" ")
  return res.join(" ")
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const sorter = {}
  strs.forEach((word, i) => {
    let sortedWord = word.split("").sort()
    if(!sorter[sortedWord]) { sorter[sortedWord] = [] }
    sorter[sortedWord].push(strs[i])
  })
  return Object.values(sorter);
};
//put them in hashes to count num chars
//sort them and save indices
//save the sorted version as the key and the indices as the value
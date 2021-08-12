/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(str) {
  let stack = [];
  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    if(char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(char)
    }
  }
  return stack.join("")
};
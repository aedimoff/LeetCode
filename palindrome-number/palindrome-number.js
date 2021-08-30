/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //iterate through backwards
    //push each char to new string
    //turn string to number
    //compare number with input
    let input = x.toString()
    let res = ""
    for(let i = input.length -1; i >=0; i--) {
        res += input[i]
    }
    return res === input
};
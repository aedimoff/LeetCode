/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if(words.length < 2) return 1;
    
    let seen = new Set();
    
    words.forEach(word => {
        let transformation = transform(word)
        seen.add(transformation)
    })
    return seen.size
};

var transform = function(word) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let transformation = ""
    word.split("").forEach(char => {
        let idx = alpha.indexOf(char)
        transformation += morseCode[idx]
    })
    return transformation
}
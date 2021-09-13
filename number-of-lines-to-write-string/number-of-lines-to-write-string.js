/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    //look at each char in s
    //find it's size in widths array using indexOf
    //set maxWidth counter to 100 to track size remaining
    //set counter to 0 to track number of lines 
    //for each char, subtract width from maxWidth counter
    //if maxWidth is less than the width of current char, incrment lines count and reset        maxWidth to 100
    //return [lines, maxWidth]
    let currLineWidth = 0;
    let lineCounter = 0;
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    
    for(let i = 0; i < s.length; i++) {
        let currCharIdx = alpha.indexOf(s[i]);
        let currCharWidth = widths[currCharIdx]
        if((currLineWidth + currCharWidth) > 100) {
            lineCounter ++
            currLineWidth = 0;
        };
        
        currLineWidth += currCharWidth
        console.log("currChar", s[i])
        console.log("currLineWidth", currLineWidth)
    }
    return [(lineCounter + 1), currLineWidth]
};
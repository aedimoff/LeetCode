/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let res = [];
    
    words.forEach(word => {
        if(checkRow(word) !== false) res.push(word)
    })
    
    return res; 
};

var checkRow = function(word) {
    let chars = word.split("")
    const rowOne = "qwertyuiop"
    const rowTwo = "asdfghjkl"
    const rowThree = "zxcvbnm"
    let row = null;
    
    let selectRowChar = chars.shift().toLowerCase()
    if(rowOne.includes(selectRowChar)) {
        row = rowOne;
    } else if (rowTwo.includes(selectRowChar)) {
        row = rowTwo;
    } else {
        row = rowThree;
    };
    
    for(let i = 0; i < chars.length; i++) {
        let char = chars[i].toLowerCase()
        if(!row.includes(char)) {
            return false;
        }
    }

    return word;
}
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = [];
    let i = 0;
    
    const positions = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
            positions.push(i)
        }
    }
    
    
    while(res.length < s.length) {
        let min = Infinity;
        
        positions.forEach(position => {
            let distance = Math.abs(position - i)
            if(distance < min) min = distance;
        })
        
        res.push(min)
        
        i++
    }
    return res;
    
};



//save all indices of c to an array -- [3, 5, 6, 11]
//itterate through s to look at each char
//for each char check if it is closer to index[j] or index[j + 1] (math.min/ math.abs)
//save that number to a results array
//for j: start at 0 if i 

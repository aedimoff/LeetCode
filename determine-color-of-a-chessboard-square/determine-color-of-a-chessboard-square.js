/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
let blackOdds = ["a", "c", "e", "g"];
let whiteOdds = ["b", "d", "f", "h"]

let c = coordinates.split("");

if(c.pop() % 2 !== 0) { //if an odd number
    if(blackOdds.includes(c[0])) {
        return false;
    } else {
        return true
    }
} else { //if even number
    if (whiteOdds.includes(c[0])) {
      return false;
    } else {
      return true;
    }
}
};
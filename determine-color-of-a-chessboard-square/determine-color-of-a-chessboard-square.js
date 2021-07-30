/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
let chars = ["a", "b", "c", "d", "e", "f", "g", "h"];
let coords = coordinates.split("");
let alphaIdx = chars.indexOf(coordinates.split("")[0]);
let pos = coordinates.split("").pop()

if (
  (alphaIdx % 2 === 0 && pos % 2 === 0) ||
  (alphaIdx % 2 !== 0 && pos % 2 !== 0)
) {
  return true;
} 

return false;
};
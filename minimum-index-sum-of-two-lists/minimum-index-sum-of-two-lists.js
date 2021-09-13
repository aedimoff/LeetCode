/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const restaurantPicker = {};
    
    list1.forEach((place, i) => {
        if(list2.includes(place)) {
            let place2Idx = list2.indexOf(place)
            let idxSum = i + place2Idx
            restaurantPicker[place] = idxSum
        }
    });
    
    let validPlaces = Object.keys(restaurantPicker)
    if(validPlaces.length < 2) return validPlaces;
    
    let maxIdx = Math.min(...Object.values(restaurantPicker))
    
    let res = [];
    
    validPlaces.forEach(place => {
        if(restaurantPicker[place] === maxIdx) {
            res.push(place)
        }
    })
    return res;
    
};

//find common restaurants in list
//store name with sum of index
//return the min index name, unless the indexSum is a tie
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    
    let merged = [sortedIntervals.shift()];
    for(let i = 0; i < sortedIntervals.length; i++) {
        let currMeeting = sortedIntervals[i]
        let prevMeeting = merged[merged.length -1]
        if(currMeeting[0] > prevMeeting[1]) {
            merged.push(currMeeting) 
        } else {
            prevMeeting[1] = Math.max(prevMeeting[1], currMeeting[1])
        }
    };

    
    return merged;
};
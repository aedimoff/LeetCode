/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
        let arr = nums1.concat(nums2).sort((a, b) => a - b);

    let i = Math.floor(arr.length / 2)
    if(arr.length % 2 !== 0) {
        return arr[i].toFixed(5)
    } else {
        let median = (arr[i] + arr[i - 1]) / 2
        return median.toFixed(5)
    }
};
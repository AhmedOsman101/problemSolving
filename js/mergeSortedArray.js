/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var arr1 = nums1.slice(0,m)
    var arr2 = nums2.slice(0,n)
    arr1 = [...arr1,...arr2].sort((a,b)=>a-b) // callback is very common here to sort numbers in js
    for(let i=0;i<nums1.length;i++){
        nums1[i] = arr1[i]
    }
};

merge([1,2,3,0,0,0],3,[2,5,6],3)
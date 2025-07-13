// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     let m1=0
//     let m2=0;
//     if(nums1 % 2 === 0){
//         let lnum= nums1.length/2 -1;
//         let rnum=nums1.length/2;
   
//         m1=
        
//     }
// };

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const array = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[mid] + array[mid - 1]) / 2;
    } else {
        return array[mid];
    }
}
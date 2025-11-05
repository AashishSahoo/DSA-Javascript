/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

function findInMountainArray(target: number, mountainArr: MountainArray) {
	
    const n= mountainArr.length();


    let left =0;
    let right = n-1;

    while(left<right){
        const mid = Math.floor( (left+right)/2);
        if(mountainArr.get(mid) < mountainArr.get(mid+1)){
            left = mid+1;
        }else{
            right = mid;
        }
    }

    const peak = left;


    let idx= binarySearch(mountainArr, target , 0,peak ,true);
    if(idx!==-1) return idx;

     return binarySearch(mountainArr,target,peak+1,n-1,false);
};


function binarySearch(
  arr: MountainArray,
    target:number,
    start:number,
    end:number,
    ascending:boolean
) :number{

    while(start<=end){
        const mid=Math.floor((start+end)/2);
        const value=arr.get(mid);

        if(value===target) return mid;

        if(ascending){
            if(value<target) start =mid+1;
            else end =mid-1

        }else{
            if(value>target) start=mid+1;
            else end = mid-1;

        }
    }
    return -1;

}
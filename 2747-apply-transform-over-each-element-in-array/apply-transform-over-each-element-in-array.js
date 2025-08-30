/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn){
    let modifedArr =[];
    for ( let i=0;i<arr.length ;i++){
        modifedArr.push(fn(arr[i] ,i));

    }
    return modifedArr;
}

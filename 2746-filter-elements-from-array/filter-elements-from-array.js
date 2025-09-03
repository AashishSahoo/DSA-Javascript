/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function(arr, fn) {
//     var newarr=[]
//     for(var i=0;i<arr.length;i++){
//         if(fn(arr[i],i)){
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// };















var  filter = function (arr ,fn){
    let res = [];
    for( let i=0;i< arr.length ;i++){
        if(fn(arr[i] , i)){
           res.push(arr[i]); 
        }
        
    }
    return res;
}
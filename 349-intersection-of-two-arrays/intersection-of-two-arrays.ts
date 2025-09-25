function intersection(nums1: number[], nums2: number[]): number[] {
//     let m1 = new Map<number , number>();
//     let m2 = new Map<number, number>();

//     for( let i=0;i< nums1.length ;i++){
//         m1.set( nums1[i] , (m1.get(nums1[i]) ||0) +1);
//     }
    
//     for( let i=0;i< nums2.length ;i++){
//         m2.set( nums2[i] , (m2.get(nums2[i]) ||0) +1);
//     }
//     let res =[];

//     for( let key of m1.keys()){
//         if(m2.has(key)){
//             res.push(key)
//         }
//     }
//  return res;

let s1= new Set(nums1);
let s2 = new Set(nums2);

let res=[];
for( let i of s1){
    if( s2.has(i)){
        res.push(i);
    }
}

return res;
    
};
function twoSum(numbers: number[], target: number): number[] {
//   for( let i=0;i< numbers.length-1 ;i++){
//     for( let j=0;j<numbers.length ;j++){
//         if(numbers[i] + numbers[j] === target){
//                 return [i+1 ,j+1];
            
//         }
//     }
//   }
//   return [];

let start =0;
let end = numbers.length-1;

let result =[];
while (start < end){
    let sum = numbers[start]+ numbers[end];
    if(sum === target){
        result[0]=start+1;
        result[1]=end+1;
        break;
    }else if(sum< target){
        start++;
    }else if(sum > target ){
        end--;
    }
}
return result;

}

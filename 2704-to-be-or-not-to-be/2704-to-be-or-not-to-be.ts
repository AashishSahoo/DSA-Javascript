// type ToBeOrNotToBe = {
//     toBe: (val: any) => boolean;
//     notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//     return {
//         toBe: function(otherVal){
//             if(otherVal === val){
//                 return true;
//             }else{
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: function(otherVal){
//             if(val !== otherVal){
//                 return true;
//             }else{
//                 throw new Error("Equal");
//             }
//         }
//     }
    
// };

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

type toBeOrNotToBe ={
    toBe :(val : any) =>  boolean;
    notToBe : (val:any) =>  boolean;
}

function expect (v:any):toBeOrNotToBe{
    return {
        toBe : (val:any)=>{
        if(v=== val){
            return true;
        }else{
            throw new Error("Not Equal");
        }
    },
    notToBe : (val:any) =>{
        if(v!== val){
            return true;
        }else{
            throw new Error("Equal");
        }
    }
    
    }
    
}




















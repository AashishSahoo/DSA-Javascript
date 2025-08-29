// type Counter = {
//     increment: () => number,
//     decrement: () => number,
//     reset: () => number,
// }

// function createCounter(init: number): Counter {
//     let num =init;

//     return {
//         increment (){
//         return ++num;
//        } ,
//          decrement (){
//       return  --num;
//        } ,  reset (){
//         num = init;
//         return num;
//        } 
//     }
// };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

type threeFunctions ={
    increment : (val :number)=> number;
    decrement : (val :number)=> number;
    reset : (val :number)=> number;
}

function createCounter ( init : number): threeFunctions {
    let v = init
    return {
        increment : ()=>{
            return ++v;
        },
        decrement : ()=>{
            return --v;
        },
        reset : ()=>{
            return v =init;
        }
    }
}















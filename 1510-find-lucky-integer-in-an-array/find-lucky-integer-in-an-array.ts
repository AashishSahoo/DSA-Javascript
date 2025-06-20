function findLucky(arr: number[]): number {

    let mp= new Map();
    let result =-1;

    for( let i=0;i< arr.length;i++){
        mp.set( arr[i] , (mp.get(arr[i])||0)+1 );
    }

    for( let [key,value] of mp){
        if( key=== value){
            result = Math.max(result , value);
        }
    }
    
    return result;
    
};
function singleNonDuplicate(nums: number[]): number {
    let mp= new Map<number, number>();

    for( let item of nums ){
        mp.set(item , (mp.get(item) || 0) +1  );
    }

    for ( let [key, value] of mp){
        if( value === 1){
            return key;
        }
    }
    return -1;
};
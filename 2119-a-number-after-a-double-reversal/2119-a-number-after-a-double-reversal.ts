function isSameAfterReversals(num: number): boolean {
    let r1 = Number(num.toString().split("").reverse().join(""));
    let r2 = Number(r1.toString().split("").reverse().join(""));

    if(r2 ===  num)return true
    else return false;


};
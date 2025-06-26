function plusOne(digits: number[]): number[] {
    // let str = digits.join("");
    // let num= Number(str);
    // num =num+1;
    // str = String(num);
    // let res:number[] = str.split("").map(Number);
    // return res;

    let nums = digits.join("");
    let number = BigInt(nums);
    number++;

    const numberString = number.toString();

    return numberString.split("").map(Number);

};
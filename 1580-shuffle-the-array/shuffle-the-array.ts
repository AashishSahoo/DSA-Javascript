function shuffle(nums: number[], n: number): number[] {
    let res: number[] = [];
    let k = 0;
    let j = n;

    for (let i = 0; i < n; i++) {
        res.push(nums[k]);
        res.push(nums[j]);
        k++;
        j++;
    }

    return res;
}
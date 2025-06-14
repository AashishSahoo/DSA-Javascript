// function threeSum(nums: number[]): number[][] {
//     let res: number[][] = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

//                     let isDuplicate = false;
//                     for (let existing of res) {
//                         if (
//                             existing[0] === triplet[0] &&
//                             existing[1] === triplet[1] &&
//                             existing[2] === triplet[2]
//                         ) {
//                             isDuplicate = true;
//                             break;
//                         }
//                     }

//                     if (!isDuplicate) {
//                         res.push(triplet);
//                     }
//                 }
//             }
//         }
//     }

//     return res;
// }

function merge(leftArr: number[], rightArr: number[]) {
    const output = [];
    let i = 0;
    let j = 0;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            output.push(leftArr[i++])
        } else {
            output.push(rightArr[j++])
        }
    }

    return [...output, ...leftArr.slice(i), ...rightArr.slice(j)];
}

function mergeSort(nums: number[]): number[] {
    if (nums.length < 2) {
        return nums
    }
    const mid = Math.floor(nums.length / 2);
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
};

function threeSum(nums: number[]): number[][] {
    const sortedNums = mergeSort(nums);
    const output = [];

    for (let i = 0; i < sortedNums.length && sortedNums[i] <= 0; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        const target = -(sortedNums[i]);
        let left = i + 1;
        let right = sortedNums.length - 1;
        while (left < right) {
            const sum = sortedNums[left] + sortedNums[right];
            if (target === sum) {
                output.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                left++
                right--
                while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                    left++
                }
            } else if (target > sum) {
                left++
            } else {
                right--
            }
        }
    }
    return output;
};
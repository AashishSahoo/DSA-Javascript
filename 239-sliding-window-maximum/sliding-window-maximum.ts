
    function maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    const deque: number[] = []; // stores indices

    for (let i = 0; i < nums.length; i++) {
        // Remove indices whose corresponding values are less than current value
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add current index
        deque.push(i);

        // Remove indices that are out of the current window
        if (deque[0] <= i - k) {
            deque.shift();
        }

        // If we have a valid window, record the maximum (at front of deque)
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;

    // for( let i=0;i<= nums.length -k;i++){
    //     let window:number[]= nums.slice(i,i+k);
    //    max = Math.max(...window );
    //    res.push(max);
    // }
    // return res;
    //  time limit exceeded
    
}

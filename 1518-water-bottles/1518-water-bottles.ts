function numWaterBottles(numBottles: number, numExchange: number): number {
    let res = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        const newBottles = Math.floor(empty / numExchange);
        res += newBottles;
        empty = newBottles + (empty % numExchange);
    }

    return res;
}

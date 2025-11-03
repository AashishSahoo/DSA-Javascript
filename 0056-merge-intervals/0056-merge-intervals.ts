function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1]); 
    } else {
      res.push(prev);
      prev = intervals[i];
    }
  }

  res.push(prev);
  return res;
}

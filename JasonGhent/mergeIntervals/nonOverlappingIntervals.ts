/* 


greedy approach:
    - sort by start time
    - iterate over intervals
    - if there is conflict,
        - increment count
        - update prevEnd to be the SMALLER of the two ends
            (the reason we do this is to minimize the probability of having another collision)


TIME: O(N LOG N), for sorting input intervals
SPACE: O(N), for sorting
*/

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b) => a[0] - b[0])
    let prevEnd: number = intervals[0][1]
    let replace: number = 0
    for (let i: number = 1; i < intervals.length; i++) {
        // if there is overlap
        if (intervals[i][0] < prevEnd) {
            replace++
            prevEnd = Math.min(prevEnd, intervals[i][1])
        }
        // no overlap
        else prevEnd = intervals[i][1]
    }
    return replace
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) // 1
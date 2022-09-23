function insert(intervals, newInterval) {
    if (intervals.length == 0)
        return [newInterval];
    var output = [];
    var i = 0;
    // no merge conflicts 
    while (i < intervals.length && newInterval[0] > intervals[i][1]) {
        output.push(intervals[i]);
        i++;
    }
    // resolve the merge conflict
    // while the start of the current overlaps with the end of new
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    // add the resolved interval to the output
    output.push(newInterval);
    // add the remaining to the list
    while (i < intervals.length) {
        output.push(intervals[i]);
        i++;
    }
    return output;
}
;
console.log(insert([[1, 3], [6, 9]], [2, 5])); // [[1,5],[6,9]]

function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    // no intersection if there is only one list
    if (!firstList.length || !secondList.length) return []
    const output: number[][] = []
    let i: number = 0
    let j: number = 0
    while (i < firstList.length && j < secondList.length) {
        // if there is overlap, add the intersection
        let firstOverlapsSecond: boolean = firstList[i][0] <= secondList[j][1] && firstList[i][0] >= secondList[j][0]
        let secondOverlapsFirst: boolean = secondList[j][0] <= firstList[i][1] && secondList[j][0] >= firstList[i][0]
        if (firstOverlapsSecond || secondOverlapsFirst) {
            const lowerbound = Math.max(firstList[i][0], secondList[j][0])
            const upperbound = Math.min(firstList[i][1], secondList[j][1])
            output.push([lowerbound, upperbound])
        }
        // move the interval with the earlier end time
        if (firstList[i][1] < secondList[j][1]) i++
        else j++
    }
    return output
};

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]))
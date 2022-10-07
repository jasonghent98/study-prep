/*
greater diff between the cost of flying person between a and b indicates that it would be better to send to city a.. bc b is likely high

if the diff is trivial or smaller, than we could afford to send to city b


approach:
    - compute the difference between b and a for each person
    - insert the diff along with the costs into a minheap that sorts by smallest difference... 
    - the first half of heap will go to city b, and the second half will go to city a
    
    
    return the sum after summing all together
    
    
TIME: O(N LOG N), inserting all people into a minheap
SPACE: O(N)

*/

function twoCitySchedCost(costs: number[][]): number {
    
    const output: [[number, number], number][] = []
    
    for (let i = 0; i < costs.length; i++) {
        const [aCost, bCost] = costs[i]
        const difference = bCost - aCost
        output.push([[aCost, bCost], difference])
    
    }
    let totalCost = 0
    // sort in ascending order by difference
    output.sort((a,b) => a[1] - b[1])
    let i = 0
    while (i < output.length) {
        const [[aCost, bCost], difference] = output[i]
        if (i < output.length / 2) totalCost += bCost
        else totalCost += aCost // larger difference
        i++
    }
    return totalCost
};
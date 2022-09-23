/* Thrilling teleporters allows players to randomize the teleporters each game. However during developement they found that 
sometimes this can lead to boards where a player cannot get to the end of the board. We want to figure out if this has happened. 
You'll be given the following.

- The game is played as follows:
1. Each turn the player rolls a die numbered from 1 to die_sides.
2. The player moves forward the rolled number of squares.
3. The player stops at last_square if they reach it.
4.; If the player finishes on a square with a telpeorter they are moved to where the teleported points.

INPUTS:
- A collection of teleporter strings.
- The number of sides ont he die
- The square the player starts on.
- The last Square ont he board. 


goal is to check if we can reach the end of the board (input) or if we will end up in a cycle


constraints:


approach:
- we can represent the teleporters and their locations using a graph

complexity:


*/

test1 = ["10,8", "11,5", "12,7", "13,9"];
test2 = ["10,8", "11,5", "12,7", "13,9", "2,15"];

const finishable = (teleporters, numSides, start, end) => {
// init our vars
const teleporterMap = {};
const visited = new Set()
const graph = {}
// the steps we can take from our dice roll
const steps = []
for (let i = 0; i < numSides; i++) {
    const num = i+1
    steps[i] = num
}
// parse each element in our teleporters array and draw out the relationship between FROM and TO locations for teleporters
teleporters.forEach((tele) => {
    tele = tele.split(",");
    [from, to] = tele;
    from = parseInt(from);
    to = parseInt(to);
    teleporterMap[from] = to;
});

// build the graph from first position until the end, marking each possibility as a neighbor in our adj. list

// if we arent at a teleporter, we can roll jump however many the dice lets us
// if we are at a teleporter, we can only go to where it teleports us

for (let currentPos = 0; currentPos <= end; currentPos++) { 
    // if the current position has been marked in teleMap
    if (currentPos in teleporterMap) {
        graph[currentPos] = []
        graph[currentPos].push(teleporterMap[currentPos])
    } else {
        graph[currentPos] = steps.map(x => x + currentPos) 
    }
}

// --- BFS ---

// init queue with start
let queue = [start];
// mark start as visited
visited.add(start)

// is a path possible?
while (queue.length) {
    let currentPosition = queue.shift();
    // if we've made it to the end, return true
    if (currentPosition >= end) return true;
    // consider all of the places we can move from the currentPosition
    for (let neighbor of graph[currentPosition]) {
        // visit all neighbors who have not been visited and add to queue for processing
        if (!visited.has(neighbor)) {
            visited.add(neighbor)
            queue.push(neighbor)
        } 
        // ignore the ones that have been visited
    }
}
    return false // if we ran out of valid positions to process and never reached the end (cycle)
}

// TESTCASES
console.log(finishable(test1, 4, 0, 20));
console.assert(finishable(test1, 4, 0, 20) === false, "Test1 Failed");

console.log(finishable(test2, 4, 0, 20));
console.assert(finishable(test2, 4, 0, 20) === true, "Test2 Failed");

console.log(finishable(test2, 4, 9, 20) );
console.assert(finishable(test2, 4, 9, 20) === false, "Test3 Failed");



// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take 
// course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


const canFinish = function(numCourses, prerequisites) {
    const adList = new Array(numCourses).fill(0).map(() =>[]);
    for (let i =0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        adList[pair[i]].push(pair[0]);
    }
    for (let v = 0; v < numCourses; v++) {
        const queue = [];
        const seen = {};
        for (let i = 0; i < adList[v].length; i++) {
            queue.push(adList[v][i]);
        }
        while (queue.lengh) {
            const current = queue.shift();
            seen[current] = true;
            if (current === v) return false;
            const adjacent = adList[current];
            for (let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if (!(seen[next])) {
                    queue.push(next);
                }
            }
        }
    }
    return true;
};
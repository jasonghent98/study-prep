
// we can either start from index 0 or 1, depending on which value is lesser. what is the min cost to climb all the way to the top?
// 
// the value of cost[i] is the cost if you land on that index
// we need to be able to keep track of the cost as we traverse the array

// input => array of i steps
// output => the minimum cost to reach the top floor (last index) from 0 or 1

// example
// total = 1
    // i
// [1,3,1,5,1,4,5,2,6]

const minCostClimbingStairs = function(cost) {
    //     init total var to be either cost[0] or cost[1], depending on lesser val
        // let start = cost[0] < cost[1] ? 0 : 1;
        // cost[0] = start;
        for (let i = 2; i < cost.length; i++) {
            cost[i] += Math.min(cost[i-1], cost[i-2]);
        }
        return Math.min(cost[cost.length - 1], cost[cost.length - 2])
    }

    
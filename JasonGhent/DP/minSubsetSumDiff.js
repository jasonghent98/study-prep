/* Given a set of positive numbers, partition the set into two subsets with a minimum difference between their subset sums. 
           i
Input: {1, 2, 7, 1, 5}
Output: 0
Explanation: We can partition the given set into two subsets where the minimum absolute difference 
between the sum of numbers is '0'. Following are the two subsets: {1, 2, 5} & {7, 1}.

we need to consider all possible subsets of a set


edge cases:
- what if we have an invalid type for input? How will we handle exceptions?
- if input length === 0, return null


APPROACH:
- keep track of 2 sums
- one sum will take the current number for its sum, the other will skip
- find every combination of 2 subsets that we can create from the given set
- compare the sum of the values 
- store the smallest difference
- store memoized results in a map to bring down time complexity




                                        
                                                                            Take 1                          
                                                                currSubsets = [1], [2,7,1,5]
                                                                sum = 1, 15
                                                                difference = 14
                                                                idx = 0

                                                        /

                                        currSubsets = [1,2], [7,1,5]
                                        sum = 1, 15
                                        difference = 14
                                        idx = 1

                                        /

                            currSubsets = [1,2,7], [1,5]
                            sum = 1, 15
                            difference = 14 
                            idx = 2

                            /

                currSubsets = [1,2,7,1], [5]
                sum = 1, 15
                difference = 14      
                idx = 3     

*/ 

const minDiff = (nums) => {
    if (!nums.length) return null;
    const dp = new Map(); // to store memoized values
    const minDiffRec = (sum1, sum2, currIdx) => {
        // memo?
        if (dp.has(sum1)) return dp.get(sum1);
        // base case
        if (currIdx === nums.length) return Math.abs(sum1 - sum2);
        // recursive calls to find the smalest diff between sums
        const diff1 = minDiffRec(sum1, sum2 + nums[currIdx], currIdx + 1);
        const diff2 = minDiffRec(sum1 + nums[currIdx], sum2, currIdx + 1);
        // store the result of this comp after both rec calls return
        dp.set(sum1, Math.abs(diff1 - diff2));

    }
    return minDiffRec(0, 0, 0);
}


console.log(`Minimum subset difference is: ---> ${minDiff([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${minDiff([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${minDiff([1, 3, 100, 4])}`);



/* 
Danny Meeting Notes:
Early career positions
- trying to find locations for the bay area 
- They will ask if you know anyone in google

- try to put as much time before the initial call and the phone screening
- try to reach virtual onsite and the final round
- would like to see some soft skills 
- revamp the professional experience with acheivements in your past experience

- add more impact value to professional summary. 
- buy some interviews from interviewing.io

you can go straight to onsite if:
- you have another fang offer
- a strong internal reference


- Saloni, Mohamed, Erica, Carmen, Dimitri



What went well?
What didnt go well

Goals for this week
Systems to implement the goals
*/
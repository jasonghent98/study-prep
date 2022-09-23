/* 

Given two sequences ‘s1’ and ‘s2’, write a method to find the length of the shortest sequence which has ‘s1’ and ‘s2’ as subsequences.





--TESTCASES--

EXAMPLE1:       i           j
INPUT: s1: 'abcf', s2: 'bdcf'
OUTPUT: 'abdcf' => 5



EXAMPLE2:
INPUT: s1: 'dynamic' s2: 'programming'
OUTPUT: 'dynprogrammicng'


EXAMPL

CONSTRAINTS:
- if one of the strings is empty, return the non-empty substring







IDEAS:
A basic brute-force solution could be to try all the super-sequences of the 
given sequences. Use two pointers to process both of the sequences one character at a 
time, so at any step, we must choose between:

- If the sequences have a matching character, we can skip one character from 
both the sequences and make a recursive call for the remaining lengths to get SCS.
- If the strings don’t match, we start two new recursive calls by skipping one 
character separately from each string. 
- The minimum of these two recursive calls will have our answer.


BASE CASE:
if we reach the end of a string, return the remaining length of the other string, 
because we need to take the remainder of the other string






COMPLEXITY:
TIME: worst case, none of the characters match and we need to make two recursive calls at each element

OPTIMIZED TIME => O(N+M), where n represents the length of the first string and m represents the length of the second string
SPACE: O(N + M), where we store the result of each subproblem in our hash map


?????????????????????
*/

const shortestSequenceWithStr1AndStr2 = (str1, str2) => {
    // handle the edge case where one string is empty
    if (str1.length && !str2.length) return str1.length;
    if (!str1.length && str2.length) return str2.length;
    // init our map for memo
    const storedSubProblems = new Map();

    // define recursive helper function
    //str1 pointer, str2 pointer, 
    const findShortestSeqRec = (p1, p2) => {
        // base cases: if we reach the end of one of the strings
        if (p1 === str1.length) return str2.length - p2;
        if (p2 === str2.length) return str1.length - p1;

        if (storedSubProblems.has(`${p1}-${p2}`)) return storedSubProblems.get(`${p1}-${p2}`);

        // if the 2 chars are the same, skip both pointers along while adding 1 to rec call
        let case1 = 0, case2 = 0
        if (str1[p1] === str2[p2]) {
            case1 = 1 + findShortestSeqRec(p1+1,p2+1);
        } else { // if different, consider each separately and take the min
            case2 = Math.min(1 + findShortestSeqRec(p1, p2+1), 1 + findShortestSeqRec(p1+1, p2));
        }

        // store the memoized results
        storedSubProblems.set(`${p1}-${p2}`, case2);
        return Math.min(case1, case2);
    }
    return findShortestSeqRec(0, 0);
}


console.log(shortestSequenceWithStr1AndStr2('abcf', 'bdcf')) // 'abdcf' => 5


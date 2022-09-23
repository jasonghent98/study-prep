/* 
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears 
in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s (contiguous)

Return a list of integers representing the size of these parts.


constraints:
- splits must be contiguous
- lowercase english letters



approach:




complexity:
TIME: O(N)
SPACE: O(1)

*/

const partitionLabels = (str) => {
    // only 1 way to partition this
    if (str.length === 1) return [1]

    // iterate over the str and record the last idx of each char we see
    const charLastIdx = {}
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i]
        charLastIdx[currentChar] = i // will either be set for first time or updated if we see it again
    }

    /* iterate over str again. endIdx will keep track of the lastidx of the last occurring char... we need to make it here so that
    so that our substrings maintain isolation within chars. we record the length for each iteration and push on length when we reach endIdx
    */
    let length = 0, endIdx = 0
    const lengthOfStrings = []
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i]
        // if the last occurring idx of this char is greater than the existing endIdx, we update endIdx
        if (charLastIdx[currentChar] > endIdx) endIdx = charLastIdx[currentChar]
        // increment the length of our curr substring
        length++
        if (i === endIdx) {
            lengthOfStrings.push(length)
            length = 0
        }
    }
    return lengthOfStrings
}

console.log(partitionLabels('abcde')) // [1,1,1,1,1]
console.log(partitionLabels('aaaaa')) // [5]
console.log(partitionLabels('ababcbacadefegdehijhklij')) // [9,7,8]
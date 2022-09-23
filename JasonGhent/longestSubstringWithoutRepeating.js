
// sliding window
// a set is a DS that does not contain duplicates
// init a maxLength var to keep track of longest substring length
// we can continue to push values onto the set with right pointer to keep track of our longest unique substring
// while the char at the right pointer is contained in the set
//      increment our left pointer
//      delete the left pointer char from the set

// at the end of the loop, the length of our longest substring will be the length of the set

// test case:
    // l
    //       r
    // 'abcabc'
    // set = [a,b,c]
    // maxLength = 3

function lengthOfLongestSubstring(s) {
    let l = 0;
    let set = new Set();
    let maxLength = 0;
    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r])
        maxLength = Math.max(maxLength, (r - l) + 1)
    }
    return maxLength;
}
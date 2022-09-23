
// Time complexity - O(n + m), where n is the length of  the string and m is the length of the pattern
// space complexity - O(m), where in worst case we are storing m distinct character in our hashmap from pattern
const smallestWindowContainingSubstring = (str, pattern) => {
    // beginning of the window
    let windowStart = 0;
    // keeps track of the amount of matches there are between chars in pattern and str
    let matched = 0;
    // keeps track of the shortest length that contains all chars from pattern
    let minLength = str.length + 1;
    // will keep track of the first index of the string that will be returned
    let substrStart = 0;
    // map to store all values from the pattern
    let patternMap = {};

    // loop over the pattern and place all values and frequencies in a hash map
    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in patternMap)) {
            patternMap[pattern[i]] = 1;
        } else {
            patternMap[pattern[i]] += 1;
        }
    }

    // loop over str to check and compare if there are any of the values in str that exist in pattern
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if (patternMap[str[windowEnd]]) {
            patternMap[str[windowEnd]] -= 1;
            if (patternMap[str[windowEnd]] >= 0) { //count every matching of character from pattern
                matched += 1;
            }
        }

        // if this block runs, it means we have found a substring that contains all of chars from pattern
        while (matched === pattern.length) {
            if (minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
            }
            let leftChar = str[windowStart];
            windowStart += 1;
            if (patternMap[str[leftChar]]) {
                if (patternMap[str[left]] === 0) {
                    matched -= 1;
                }
                patternMap[str[leftChar]] += 1;
            }
        }
    }
    return minLength > str.length ? '' : str.substring(substrStart, substrStart + minLength);
}
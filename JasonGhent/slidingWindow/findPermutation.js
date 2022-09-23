
// optimal solution
// O(n+m) time, where n is the length of the string & m is the length of the pattern
// O(m) space worst case, where we have to store m distinct characters from the pattern in a hash map
function findPermutation(str, pattern) {
    let wS = 0;
    let matched = 0;
    let patternMap = {};
    for (let i = 0; i < pattern.length; i++) {
        if (!patternMap[pattern[i]]) {
            patternMap[pattern[i]] = 1;
        } else {
            patternMap[pattern[i]] += 1;
        }

    }

    for (let wE = 0; wE < str.length; wE++) {
        if (patternMap[str[wE]]) {
            patternMap[str[wE]]--;
            if (patternMap[str[wE]] === 0) {
                matched++;
            }
        }

        if (matched === Object.keys(patternMap).length) return true;

        if (wE >= pattern.length - 1) {
            let leftChar = str[wS]
            wS++;
            if (leftChar in patternMap) {
                if (patternMap[leftChar] === 0) {
                    matched--;
                }
                patternMap[leftChar]++;
            }
        }

    }
    return false;
}
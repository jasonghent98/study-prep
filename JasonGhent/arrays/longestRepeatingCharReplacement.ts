/**
    we shrink the window when there are more than k places for which we can swap

        i
    "abab"

         i
    "AABABBA"

    5 - 3 = 1


    keep trac of the highest frequecy element
        - we do this by storing all chars and their freqs in a map
        - further, for each iteration, we check to see if this char is the highest occuring element,    ensuring we always have the highest freq element
    subtract that from the length
    if this difference ever exceeds k, we shrink our window

    return longest length
 */

function characterReplacement(s: string, k: number): number {
    let longestLength: number = 0, windowStart: number = 0, highestFrequencyChar = 0;
    const charFrequency: Record<string, number> = {}
    for (let windowEnd: number = 0; windowEnd < s.length; windowEnd++) {
        const currChar = s[windowEnd];
        charFrequency[currChar] = charFrequency[currChar] + 1 || 1;
        // keep track of the highest freq char
        highestFrequencyChar = Math.max(highestFrequencyChar, charFrequency[currChar]);
        while((windowEnd - windowStart + 1) - highestFrequencyChar > k) {
            const leftChar = s[windowStart];
            charFrequency[leftChar]--
            if (charFrequency[leftChar] == 0) delete charFrequency[leftChar];
            windowStart++;
        }

        // keep track of the longest length
        longestLength = Math.max(longestLength, windowEnd - windowStart + 1);
    }
    return longestLength;
};


console.log(characterReplacement("ABBAAABA", 1)) // 5
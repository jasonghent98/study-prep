/* 

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a 
single space separating the words. Do not include any extra spaces.



constraints:



approach:
1. handle edge cases
2. init output array
3. trim the string to avoid trailing whitespace edge cases
4. itertate over the trimmed string
    5. if the current char is an empty space and the previous was too, skip
    6. push the currentChar onto the output array
7. redefine the output array to be the joined version by the space delimiter. split this again and place this result into an array
8. take this result and reverse it. redefine the result of the of this to the same output arr
9. take this result and return the joined version of it



complexity:
time: O(N)
space: O(N)


*/

const reverseString = (str) => {
    if (str.length === 1) return str
    let output = []
    // trim any white space
    str = str.trim()
    // iterate over string and process chars into output arr
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i]
        if (i > 0 && currentChar === str[i-1] && currentChar === ' ') continue
        output.push(currentChar)
    }
    // => ['h','o','w',' ', 'a'] => 'how a' => ['how', 'a']
    output = output.join('').split(' ')
    // reverse the new output and update the variable... => ['a', 'how']
    output = reverse(output)
    // join each word by a space
    return output.join(' ')
}

const reverse = arr => {
    let left = 0, right = arr.length - 1
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++, right--
    }
    return arr
}

console.log(reverseString("a good   example"))
console.log(reverseString("  hello world  "))
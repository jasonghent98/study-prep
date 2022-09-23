/* Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty. */

// TIME: O(N)
// SPACE: O(N), using 2 stacks


// two stacks: fill both stacks with valid characters after considering the backspaces. join both stacks to string once finished and compare
const stringCompare = (str1, str2) => {
    const stack1 = []
    for (let char of str1){
        if (stack1.length && char == '#') stack1.pop()
        else if (char !== '#') stack1.push(char)
    }

    const stack2 = []
    for (let char of str2) {
        if (stack2.length && char == '#') stack2.pop()
        else if (char !== '#') stack2.push(char)
    }

    return stack1.join('') == stack2.join('')
}


// Optimal solution: O(N) TIME | O(1) SPACE
// two pointers that will traverse from end to start in both strings. a function will find the next valid char of both strings for each iteration. if at any point the characters are different after running the functions.. they cant be the same
const stringCompareOptimal = (str1, str2) => {
    // two pointers
    let ptr1 = str1.length - 1, ptr2 = str2.length - 1
    while (ptr1 >= 0 || ptr2 >= 0) {
        // find the next valid idx for both strings
        let idx1 = nextValidIdx(str1, ptr1)
        let idx2 = nextValidIdx(str2, ptr2)
        // compare the next valid chars for both strings
        if (idx1 < 0 && idx2 < 0) return true
        if (idx1 < 0 || idx2 < 0) return false
        if (str1[idx1] != str2[idx2]) return false
        ptr1 = idx1 - 1
        ptr2 = idx2 - 1
    }
    return true
}

const nextValidIdx = (str, ptr) => {
    let backspaceCount = 0
    while (ptr >= 0) {
        if (str[ptr] == '#') backspaceCount++
        else if (backspaceCount > 0) backspaceCount-- // we can skip this character
        else break // stop here, no more valid backspaces we can skip
        ptr--
    }
    return ptr
}


console.log(stringCompareOptimal('ab##', '')) // true
console.log(stringCompareOptimal('ab##c', 'c')) //  true
console.log(stringCompareOptimal('ab##c', 'd')) //  false
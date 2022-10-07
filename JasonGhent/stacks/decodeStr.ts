/*

approach:
    - any character that isnt a ], append to the stack
    - the moment we hit a ], we need to evaluate the the string that came before it, until we hit an open bracket
    - once we hit an open bracket, we pop off once more to remove the open bracket
    - now, we need to evaluate the factor / multiplier... so we append this to a new variable
    - next, we cast the factor into an integer and add the string k times to the output
    
    return the output once finished
    
    
TIME: K * N, where we will need to push the string k times in worst case... and we will be looping over the input string once
SPACE: O(N)



*/


function decodeString(s: string): string {
    // INIT OUR STACK
    const stack: any[] = []
    // iterate over our string
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i])
        } else { // evaluate the running string
            let str = ''
            // while we have a character, add to the str
            while (/[a-zA-Z]/.test(stack[stack.length -1])) str = stack.pop() + str
            stack.pop() // for the [
            // count the integer
            let int = ''
            while (stack.length && !isNaN(parseInt(stack[stack.length - 1]))) int = stack.pop() + int
            for (let i = 0; i < parseInt(int); i++) {
                stack.push(str)
            }
        }
    }
    return stack.join('')
};


console.log(decodeString('5[leetcode]')) // leetcodeleetcodeleetcodeleetcodeleetcode
console.log(decodeString('5[ab3[f]]')) // abfffabfffabfffabfffabfff
/*
goal is to repeatedly remove k adjacent and same letters until we cant anymore


 
                i
"deeedbbcccbdaa", k = 3

counter = 2
   
[[a,2]]


"pbbcggttciiippooaais", k = 2

[p,s]


approach:
    - push the current value onto our stack
    - if len > 1 and the value we added is the same as the previous:
        - increment a counter variable
        - if the counter variable == k:
            remove k elements from our stack
            count the number of consec similar elements and set that to counter
            continue
    - else, (stack only has 1 element in it OR recently added element not the same as previous, set our counter to 1 and continue
    
join the string once finished


TIME: O(N)
SPACE: O(N)
*/
function removeDuplicates(s: string, k: number): string {
    type data = [string, number]
    const stack: data[] = []
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        // this means there is already an entry in the stack for this char
        if (stack.length && s[i] == stack[stack.length - 1][0]) {
            // update the frequency of the most recent element in stack
            stack[stack.length - 1][1] += 1
            if (stack[stack.length - 1][1] == k) {
                stack.pop()
            }
        } else {
            // this is a new character instance, so we add a new entry to our stack
            stack.push([s[i], 1])
        }
    }
    // iterate over what remains in stack and add to the output array
    const output: string[] = []
    for (let i = 0; i < stack.length; i++) {
        while (stack[i][1] > 0) {
            output.push(stack[i][0])
            stack[i][1]--
        }
    }
    return output.join('')
};

console.log(removeDuplicates("deeedbbcccbdaa", 3)) 
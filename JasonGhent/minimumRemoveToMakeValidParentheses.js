// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) 
// so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 
// all lowercase letters are valid 
// the only chars that matter are the '(' and ')'
// if we come across a (, push onto the stack
// if we come across a ), we need to pop from the stack and make sure we have a corresponding opening parentheses
//     if we do, keep moving forward
//     if we dont, replace s[i] from the string with ''

// edge case:
// while the last element in the stack is (, remove it from the string

// return the string
        // i
// s = '))(('
// stack = 

// runtime: O(n); space: O(n), where each element in the string is ( || ), worst case
var minRemoveToMakeValid = function(s) {
    let arr = s.split('');
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') stack.push(i);
        else if (arr[i] === ')' && stack.length) {
            stack.pop();
        }
        else if (arr[i] === ')') {
            arr[i] = '';
        }
    }
    while (stack.length) {
        const remove = stack.pop()
        arr[remove] = '';
    }
    return arr.join('');
};
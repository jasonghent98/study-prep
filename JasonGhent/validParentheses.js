// valid if:
// open brackets must be closed in the correct order
// must be closed by the same type of brackets

//  i
// '{[()]}'

// stack = [ {[(

    var isValid = function(s) {
        if (s.length === 0) return true;
        if (s.length % 2 !== 0) return false;
        const stack = [];
        for (let i = 0; i < s.length; i++) {
        if
    (stack[stack.length - 1] === '{' && s[i] === '}' || stack[stack.length - 1] === '[' && s[i] === ']' || stack[stack.length - 1] === '(' && s[i] === ')') 
        {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
        return !Boolean(stack.length)
            
    };
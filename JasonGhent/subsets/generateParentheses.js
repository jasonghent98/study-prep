
const generateParentheses = num => {
    const result = [];
    const parenthesesString = new Array(2 ** num);
    findCombinations(num, 0, 0, parenthesesString, 0, result);
    return result;
}

const findCombinations = (num, openCount, closeCount, parenthesesStr, idx, result) => {
    if (openCount === num && closeCount === num) {
        result.push(parenthesesStr.join(''));
        return;
    } else {
        if (openCount < num) {
            parenthesesStr[idx] = '(';
            findCombinations(num, openCount+1, closeCount, parenthesesStr, idx+1, result);
        } 
        if (openCount > closeCount) {
            parenthesesStr[idx] = ')';
            findCombinations(num, openCount, closeCount+1, parenthesesStr, idx+1, result);
        }
    }
}

console.log(generateParentheses(2));

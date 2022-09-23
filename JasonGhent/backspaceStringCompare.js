// O(n) runtime;    O(n) space using a stack 
let backspaceCompare = (s, t) => {
    let stackS = [];
    let stackT = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            stackS.push(s[i]);
        } else if (stackS.length > 0) {
            stackS.pop();
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== '#') {
            stackT.push(t[i]);
        } else if (stackT.length > 0) {
            stackT.pop();
        }
    }
    const stringS = stackS.join('');
    const stringT = stackT.join('');
    return stringS === stringT
}
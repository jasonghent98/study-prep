const addBinary = (a,b) => {
    let carry = 0, result = '';
    const bigger = a.length > b.length ? a : b;
    const smaller = a.length <= b.length ? a : b;
    console.log(smaller, bigger)
    for (let bPtr = bigger.length - 1, sPtr = smaller.length - 1; bPtr >= 0; bPtr--, sPtr--) {
        let sum = parseInt(bigger[bPtr]) + parseInt(smaller[sPtr] || 0) + carry;
        if (sum === 0) {
            carry = 0;
            result='0' + result;
        } else if (sum === 1) {
            carry = 0;
            result = '1' + result;
        } else if (sum == 2) {
            carry = 1;
            result = '0' + result;
        } else { // what is this case????
            carry = 1;
            result = '1' + result;
        }
    }
    return carry ? carry + result : result;
}

console.log(addBinary('11', '1')) // '100'
console.log(addBinary("110010", "111010")) // "1101100"

const productExceptSelf = (numbers) => {
    const result = new Array(numbers.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < numbers.length; i++) {
        // multiply the current prefix to the output array
        result[i] = prefix;
        // update the prefix for the next number
        prefix *= numbers[i];
    }
    let postfix = 1;
    for (let i = numbers.length - 1; i >= 0; i--) {
        // multiply the the current prefix with current postfix
        result[i] *= postfix;
        // update postfix
        postfix *= numbers[i];
    }
    return result;
}


console.log(productExceptSelf([2,3,5,6])) // [90, 60, 36, 30]
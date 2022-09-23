function addOperators(num, target) {
    const output = [];
    const permute = (str, arr, total, prev) => {
        if (!str.length && total === target) {
            output.push(arr.join(''));
        }
        let length = str.length;
        if (str[0]==='0')length = 1;
        for (let i = 1; i <= length; i++) {
            const curr = +str.slice(0, i);
            const rest = str.slice(i);
            if (!arr.length) permute(rest, [curr], curr, curr);
            else {
                permute(rest, [...arr, '+', curr], total+curr, curr);
                permute(rest, [...arr, '-', curr], total-curr, 0-curr);
                const prod = prev * curr;
                permute(rest, [...arr, '*', curr], total-prev+prod, prod);
            }
        }
    }
    permute(num, [], 0,0);
    return output;
}
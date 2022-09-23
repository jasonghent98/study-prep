/* 
time: O(2^n * n); bc as we process each additional character, the size of our output array doubles. 
we also have to process all of the characters in each permutation, which is O(n) time
 
space: O(2^n * n); bc we have to store 2^n permutations in our output array; and each permutation has length n

 */
function findPermutationsCase (str) {
    const permutations = [str];
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            const n = permutations.length;
            for (let j = 0; j < n; j++) {
                const char = permutations[j].split('');
                if (char[i] === char[i].toLowerCase()) {
                    char[i] = char[i].toUpperCase();
                } else {
                    char[i] = char[i].toLowerCase();
                }
                permutations.push(char.join(''));
            }
        }
    }
    return permutations;
}

console.log(findPermutationsCase("adcde52"));
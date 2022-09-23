/* 

Write the code that will take a string and make this conversion given a number of rows:

INPUTS: STRING, numRows
OUTPUT: string representing the zigzag conversion 



--TESTCASE--
EXAMPLE 1:
INPUT: 'thisisatest', numRows: 4
OUTPUT: 


t    a
h  s t
i i  e  t
s    s

=> 'tahstiietss'



EXAMPLE 2:
'hello', numRows = 1
output: 'hello'





Example 3:
INPUT: 'howdy', numRows = 6

h
o
w
d
y

=> howdy


CONSTRAINTS:
- ifnumRows is greater than or eq to string length, or if it is 1 return the string






IDEAS:
1. initialize an array that will contain arrays (matrix)
2. keep track of count and boolean variable down
3. the count will increment if the down is true, and decrement it if it is false
4. if down reaches the last idx of the rows || if it reaches 0 , we can invert it
5. repeat the process for each character in the string


COMPLEXITY:
TIME: O(N), where we have to iterate over each char in string, placing them in the matrix
SPACE: O(N), where we are storing n chars in a matrix

*/


const zigzag = (string, numRows) => {
    // handle our edge cases
    if (numRows === 1 || numRows >= string.length) return string;

    // initialize the matrix array that will hold the rows and characters
    const holdCharacters = [];
    let converted = '';
    let goingDown = true;
    let count = 0;
    // populate the array with numRows amount of arrays
    for (let i = 0; i < numRows; i++) holdCharacters[i] = [];

    // reverse the directions once count hits one of our conditions
    for (let i = 0; i < string.length; i++) {
        // push the curr string char onto the count idx array in matrix
        const currentChar = string[i];
        holdCharacters[count].push(currentChar);
        // if true, increment count, otherwise, decrement
        goingDown ? count++ : count--;
        if (count === numRows - 1 || count === 0) goingDown = !goingDown;
    }
    return holdCharacters.reduce((previousRow, currRow) => {
        return previousRow + currRow.join('');
    }, '')
}


console.log(zigzag('thisisatest', 4));
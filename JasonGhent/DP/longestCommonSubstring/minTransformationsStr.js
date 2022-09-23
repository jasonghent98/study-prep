/* 
Given strings s1 and s2, we need to transform s1 into s2 by deleting and inserting 
characters. Write a function to calculate the count of the minimum number of 
deletion and insertion operations.


str1 => str2 (transform str1 into str2)


Examples:

Test Case 1:
str1 = 'abc'
str2 = 'dvc'
output = 4

Test Case 2:
str1 = ''
str2 = 'abc'
output = 3, (if either is empty, the number of insertions or deletions is equal to the number of characters (length) of the non-empty string)


Test Case 3:
minTrans = 1 
        i
str1 = "abdca"
        
        j
str2 = "cbda"
output = 2, we need to delete (a and c)




constraints:
- if one of the strings are empty, minTransformations will be the length of the other string
- lowercase english characters
- str1 must be turned into an exact copy of str2 (no permutation)
- each insertion 

Base Case:
- if we were to have no chars for both strings, we would need a min of 0 transformations (or if both strings are already equal)
- 







Ideas:
- iterate through both strings in the dp array to check if the chars have the same value
- if the characters are the same, skip the current index
- if character at str1 !== char at str2, we need to remove the char from str1 and replace it with char from str2
- once we find the longest substring between 2 strings... 
    if str2.length > str1.length
    str2.length - LCS = the number of insertions we need for str1
    if str1.length > str2.length
    str1.length - LCS = the number of deletions we need for str1


- find the longest common substring
-  str2.length - LCS = the number of insertions we need for str1
-  str1.length - LCS = the number of deletions we need for str1
- add the number of deletions and insertions to our minTransformations var



Complexity:
TIME: O(STR1 * STR2)
SPACE: O(STR1 * STR2), where we need to store all the characters of each string in a dp array

*/


const findMinTransformations = (str1, str2) => {
    // handle edge cases
    // we need to delete all the characters from str1 

    if ((str1.length && !str2.length)) return str1.length;
    // we need to insert all characters from str2 into str1

    if ((!str1.length && str2.length)) return str2.length;
    // init a dp array to store the characters from each string (+1 accounts for if we have 0 characters)
    const dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0));

    let minTransformations = 0, longestCommonSubstr = 0;
    // iterate over all characters from the dp array
    for (let row = 1; row <= str1.length; row++) {
        for (let col = 1; col <= str2.length; col++) {
            if (str1[row-1] === str2[col-1]) {
                dp[row][col] = 1 + dp[row-1][col-1];
            } else {
                dp[row][col] = Math.max(dp[row-1][col], dp[row][col-1]);
            }
            longestCommonSubstr = Math.max(dp[row][col], longestCommonSubstr);
        }
    }
    // the total deletions needed 
    const deletions = str1.length - longestCommonSubstr;
    // add all of the numbers not present in str1 from str2
    const insertions = str2.length - longestCommonSubstr;
    return deletions + insertions;
}

console.log(findMinTransformations('abc','dvc')) // 4
console.log(findMinTransformations('abc', '')) // 3
console.log(findMinTransformations("abdca","cbda")) // 3
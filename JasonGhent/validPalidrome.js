// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
// removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 // constraints:
// the length of the string must be at least 1 (length of one would be true)
// we are testing strings that are converted to lowercase chars

// approach:
// 2 pointers. 1 at the beginning and 1 at the end
// in order to be a palindrome, the 2 pointers must contain the same letters/value as they move inward

// .replace() can be used to match any character that is not alphanumeric with empty spaces\

// runtime complexity: O(n); space: O(1)
var isPalindrome = function(s) {
    if (s.length === 1 || s.length === 0) return true;
    const lowercase = s.toLowerCase();
    const mergedString = lowercase.replace(/[^A-Za-z0-9]/g, '');
    let left = 0;
    let right = mergedString.length - 1;
    while (left < right) {
        if (mergedString[left] === mergedString[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// constraints:
// the length of the string must be >= 1
// consists of lowercase english letters

// we can only delete at most 1 character from string'

// 2 pointers; left & right
// while left < right
//      if the s[left] != s[right]
//      check to see if isPalindrome on the rest of string (left+1) || (right-1)
// left++;
// right--;

// runtime: O(n); space: O(1)
let isPalindrome = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
//  check if the string is palindrome after removing either of the chars at indices
        return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
        }
        left++;
        right--;
    }
    return true;
};
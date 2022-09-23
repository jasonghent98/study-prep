var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    if(!haystack.includes(needle)) return -1;
    return haystack.split(`${needle}`)[0].length;
};
console.log(strStr('hello', 'll')) // 2
console.log(strStr('thisisthetest', 'the')) // 6
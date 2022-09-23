const countMinJumps = function(jumps) {
    const dp = Array(jumps.length).fill(0);
  
    // initialize with infinity, except the first index which should be zero as we start from there
    for (let i = 1; i < jumps.length; i++) dp[i] = Number.MAX_VALUE;
  
    for (let start = 0; start < jumps.length - 1; start++) {
      for (let end = start + 1; end <= start + jumps[start] && end < jumps.length; end++) {
        dp[end] = Math.min(dp[end], dp[start] + 1);
      }
    }
  
    return dp[jumps.length - 1];
  };
  
  console.log(`Minimum jumps needed: ---> ${countMinJumps([2, 1, 1, 1, 4])}`); // 3
  console.log(`Minimum jumps needed: ---> ${countMinJumps([1, 1, 3, 6, 9, 3, 0, 1, 3])}`); // 4
  
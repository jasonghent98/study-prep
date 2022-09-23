function diff_ways_to_evaluate_expression(input) {
    return diffWaysRecur({}, input);
  }
  
  
  function diffWaysRecur(map, input) {
    if (input in map) {
      return map[input];
    }
  
    const result = [];
    // base case: if the input string is a number, parse and add it to output.
    if (!(input.includes('+')) && !(input.includes('-')) && !(input.includes('*'))) {
      result.push(parseInt(input));
    } else {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (isNaN(parseInt(char))) { // if not a digit
          // break the equation here into two parts and make recursively calls
          const leftParts = diffWaysRecur(map, input.substring(0, i));
          const rightParts = diffWaysRecur(map, input.substring(i + 1));
          for (let l = 0; l < leftParts.length; l++) {
            for (let r = 0; r < rightParts.length; r++) {
              let part1 = leftParts[l],
                part2 = rightParts[r];
              if (char === '+') {
                result.push(part1 + part2);
              } else if (char === '-') {
                result.push(part1 - part2);
              } else if (char === '*') {
                result.push(part1 * part2);
              }
            }
          }
        }
      }
    }
    map[input] = result;
    return result;
  }

  console.log(diff_ways_to_evaluate_expression("1+2*3"));
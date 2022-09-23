function backspaceCompare (s, t) {
    //     two pointers to compare each string
        let sPointer = s.length - 1;
        let tPointer = t.length - 1;
    //     loop as long as either string pointer has not reached the beginning
        while (sPointer >= 0 || tPointer >= 0) {
            let s1 = checkChars(s, sPointer);
            let t1 = checkChars(t, tPointer);
            if (s1 < 0 && t1< 0) return true;
            if (s1 < 0 || t1< 0) return false;
            if (s[s1] !== t[t1]) return false;
            
            sPointer = s1 - 1;
            tPointer = t1 - 1;
        }
        return true;
    }
    
    function checkChars (str, index) {
        let backspaceCount = 0;
        while (index >= 0) {
            if (str[index] === '#') { // found a backspace character
                backspaceCount += 1;
            } else if (backspaceCount > 0) { // a non-backspace character
                backspaceCount -= 1;
            } else break;
    
        index -= 1; // skip a backspace or a valid character
      }
    
      return index;
    }
    
backspaceCompare('abc', 'abc#c')
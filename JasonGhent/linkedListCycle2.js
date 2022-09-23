// floyd's hare and tortoise algo
// 2 pointers start at the same point: 1 pointer increments by 1, the second increments by 2.
// if the hare catches the tortoise, then we have found our meetingPoint; we can break 

// init 2 pointers again: 1 at head of list and one at meetingPoint
// move both pointers along until they reach each other, return that point when they do

var detectCycle = function (head) {
    let p1 = head, p2 = head;
    // Empty list or only one node and has cycle
    if (p1 === null || p1 === p1.next) return p1;
  
    while (true) {
      p1 = p1.next;
      p2 = p2.next ? p2.next.next : p2.next;
      if (p2 === null) return null;
  
      if (p1 === p2) break;
    }
  
    p1 = head;
    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1;
  };
  
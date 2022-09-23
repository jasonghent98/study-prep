
/*


Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.


["A","A","A","B","B","B"], n = 2
  
{
A: 3
B: 3
}

maxFrqHeap = [ ]

mI = 1


time = 8

waitlist = [[a,1], [b,1]]

if idlePeriod > 0, it means we werent able to process idlePeriod distinct tasks and that we may need to go idle for the remainder


TIME: ~ O(N), our input will only have uppercase letters (bound to 26 log n operations inserting and removing from our pq)
SPACE: O(N)
*/

var leastInterval = function(tasks, n) {
  let frequencyMap = {}
  tasks.forEach((task: string) => {
      frequencyMap[task] = frequencyMap[task] + 1 || 1
  })
  const maxHeap = new MaxPriorityQueue<any>({compare: (a,b) => b[1] - a[1]})
  Object.keys(frequencyMap).forEach((task: string) => {
      maxHeap.enqueue([task, frequencyMap[task]])
  })
  let timeElapsed = 0
  while (maxHeap.size()) {
      let idlePeriod = n + 1
      const waitList: any = []
      while (maxHeap.size() && idlePeriod) {
          let [task, frequency] = maxHeap.dequeue()
          frequency--
          if (frequency > 0) waitList.push([task, frequency])
          idlePeriod--
          timeElapsed++
      }
      waitList.forEach(task => {
          maxHeap.enqueue(task)
      })
      if (maxHeap.size()) timeElapsed += idlePeriod
  }
  return timeElapsed
}


/* OPTIMAL GREEDY SOLUTION:
TIME: O(N)
SPACE: O(26)

*/

const leastInterval = (tasks, n) => {
    let count = {}, maxCount = 0, e = 0
    tasks.forEach(task => {
        count[task] = count[task] + 1 || 1
        if (count[task] > maxCount) {
            maxCount = count[task]
        }
    })
    
    // iterate over the map. if we encounter the max count, increment e
    Object.keys(count).forEach(task => {
        if (count[task] == maxCount) e++
    })
    return Math.max(tasks.length, (maxCount-1) * (n+1) + e)
}
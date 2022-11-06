// O(N) T & S
const helper = (n, k) => {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = (ans + k) % i;
    }
    return ans;
}

const findTheWinner = (n, k) => {
    return helper(n, k) + 1;
}


// O(N^2) T & S
const findTheWinnerSec = function(n, k) {
// Build queue
    let que = [] 
    for(let i = 1; i <= n;i++){
        que.push(i)
    }

    while(que.length > 1){
		let deleteCount = k-1
			while(deleteCount > 0){
				que.push(que.shift())    //Rotate Elements  
				deleteCount--
			}
        que.shift()                    // Delete kth element
    }
    return que.shift()  
};
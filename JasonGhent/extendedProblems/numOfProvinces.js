const findProvinces = (isConnected) => {
    const visited = {};
    const traverse = (index) => {
        visited[index] = true; // mark current as visited
        for (let i = 0; i < isConnected[index].length; i++) { // iterate over current city and visit connected cities
            if (!visited[i] && isConnected[index][i] === 1) traverse(i);
        }
    }
    let total = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            traverse(i);
            total++;
        }
    }
    return total;
}

console.log(findProvinces([[1,1,0],[1,1,0],[0,0,1]]));
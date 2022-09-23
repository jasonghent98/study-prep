const findConnections = (word, wordSet) =>{
    const result = [];
    const aASCII = "a".charCodeAt(0);
    for(let i = 0; i<word.length;i++){
        const firstHalf = word.substring(0,i);
        const lastHalf = word.substring(i+1);
        for(let j = 0; j<26; j++){
            const nextWord = firstHalf + String.fromCharCode(aASCII + j) + lastHalf;
            if(wordSet.has(nextWord)){
                result.push(nextWord);
            }
        }
    }return result;
}

const ladderLength = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    const queue = [beginWord];
    let distance = 0;
    while(queue.length){
        distance++;
        let N = queue.length;
        while(N--){
            const word = queue.shift();
            const connections = findConnections(word,wordSet);
            for(let i = 0; i<connections.length;i++){
                const nextWord = connections[i];
                if(nextWord === endWord){
                    return distance+1;
                }
                queue.push(nextWord);
                wordSet.delete(nextWord);
            }  
        }
    }
    return 0;
};

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"])) // 5
console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"])) // 0
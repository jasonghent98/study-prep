/* There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets. 
Write a method to find the correct order of the alphabets in the alien language. It is given that the input is a valid 
dictionary and there exists an ordering among its alphabets. 

we can compare a word with its subsequent word to find the alphabetical order of each letter
we can loop over and compare the chars for two words. the first letter that is different will represent the parent/child relationship

we know that the parent must come before the child, so, we can process it first in a queue as a source

This problem turns into topological sort

we can always assume the words are from a valid dictionary and there does exist an ordering amongst its alphabets
if the array contains a cylic dependency, that means we cannot find the true order of the words bc there is no parent child relationship... it is a cycle

input => array of words
output => the alphabetical order of chars in the alien alphabet. there is no ordering if the is a cyclic dependency
*/

const alienSort = (words) => {
    if (words.length < 1) return '';
    const sortedOrder = [];
    // init the graph
    const graph = {};
    const inDegree = {};
    words.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            graph[word[i]] = [];
            inDegree[word[i]] = 0;
        }
    });
    // build the graph by finding the parent child relationships between every two words
    for (let i = 0; i < words.length - 1; i++) {    
        const w1 = words[i];
        const w2 = words[i+1];
        for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
            const parent = w1[j];
            const child = w2[j];
            if (parent !== child) { // we can draw a graph from this (parent child relationship)
                graph[parent].push(child);
                inDegree[child]++;
                break; // bc we only need the first instance of a discrepancy
            }
        }
    } 
    // place all sources into queue for processing
    const sources = [];
    Object.keys(inDegree).forEach(letter => {
        if (inDegree[letter] === 0) sources.push(letter);
    });
    while (sources.length) {
        const source = sources.shift();
        sortedOrder.push(source);
        graph[source].forEach(child => {
            inDegree[child]--;
            if (inDegree[child] === 0) sources.push(child);
        });
    }
    if (sortedOrder.length === Object.keys(graph).length) return sortedOrder.join('');
    return '';
    
}
console.log(alienSort(["ba", "bc", "ac", "cab"]));
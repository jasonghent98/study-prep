class Trie {
    constructor() {
        this.root = new TrieNode();
    }

Trie.prototype.insert = function(word, node = this.root) {
if (word.length === 0) {
    node.end = true;
    return;
} else if (!node.keys[word][0]) {
node.keys[word[0]] = new TrieNode();
    this.insert    (word.substring(),node.keys[word[0]]);
    } else {
        this.insert(word.substring(1), node.keys[word][0]);
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, node = this.root) {
  if (word.length === 0 && node.end) {
       return true;
   } else if (word.length === 0) {
       return false;
   } else if (!node.keys[word[0]) {
       return false;
   } else {
     return                                  this.search(word.substring(1),         node.keys[word[0]])
   }
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix, node = this.root) {
    if (prefix.length === 0) {
        return true;
    } else if (!node.keys[prefix[0]) {
       return false;
   } else {
       return                          this.startsWith(prefix.substring(1), node.keys[prefix[0]])
   }
};
}
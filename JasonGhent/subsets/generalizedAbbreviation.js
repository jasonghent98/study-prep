
const findGeneralizedAbbreviations = (word) => {
    const result = [];
    findAbbreviations(word, '', 0, 0, result);
    return result;
}

const findAbbreviations = (word, abWord, start, count, result) => {
    if (word.length === start)  { // base case
        if (count !== 0) abWord += count;
        result.push(abWord);
    } else {
        findAbbreviations(word, abWord, start + 1, count + 1, result);
        if (count !== 0) abWord += count;
        const newWord = abWord + word[start];
        findAbbreviations(word, newWord, start + 1, 0, result);
    }
}

console.log(findGeneralizedAbbreviations('word'))
console.log(findGeneralizedAbbreviations('abc'))
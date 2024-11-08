{
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const words = lowerCaseSentence.split(' ');
        const countingWord = words.filter(filteringWord => filteringWord === lowerCaseWord).length;
        return countingWord;
    }

    console.log(countWordOccurrences("I love TypeScript", "typescript"));


}
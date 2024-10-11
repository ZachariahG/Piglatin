//DOM button and form for translator



const translate = (str) => {
    let translation = '';
    let i = 0;

    while (i < str.length) {
        let word = '';
        //this loop runs till a space is found or the end of the str; saves to word
        while (i < str.length && str[i] !== ' ') {
            word += str[i];
            i++;
        }
        //this references a helper fn that should translate the word and save it to result
        translation += translateWord(word);

        if (i < str.length) {
            translation += ' ';
        }

        i++;
    }

    return translation;
}

const translateWord = (word) => {
    word = word.toLowerCase();
    const firstVowelIndex = findFirstVowel(word);

    if(firstVowelIndex === 0) {
        return `${word}way`; //should return word + way
    }

    let consonantCluster = '';
    for(let i = 0; i < firstVowelIndex; i++) {
        consonantCluster += word[i];
    }

    let remainder = '';
    for (let i = firstVowelIndex; i < word.length; i++) {
        remainder += word[i];
    }

    return `${remainder}${consonantCluster}ay`; //should return remainder + consonantCluster + ay
}

const findFirstVowel = (word) => {
    const vowels = 'aeiou';
    for(let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return i; //should return any vowel that matches the str 
        }
    }
    return -1; //no vowel present
}



module.exports = translate;
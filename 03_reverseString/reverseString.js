const reverseString = function(phrase) {
    const words = [...phrase];
    let revWords = '';

    for (i = 0; i < words.length;) {
        revWords += words.pop();
    }

    return revWords
};

// TOP solution // return string.split('').reverse().join('');

// Do not edit below this line
module.exports = reverseString;
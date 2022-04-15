const repeatString = function(phrase, count) {
    if (count < 0) return 'ERROR';
    string = '';
    for (let i = 0; i < count; i++) {
        string += phrase;
    }

    return string

};

// Do not edit below this line
module.exports = repeatString;
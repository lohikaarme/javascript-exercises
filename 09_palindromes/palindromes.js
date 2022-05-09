let palindromes = (string) => prepString(string) === revTrimString(string);

let revTrimString = (string) => prepString(string).split('').reverse().join('');

let prepString = (string) => string.toLowerCase().replace(/\W/g,'');

module.exports = palindromes;

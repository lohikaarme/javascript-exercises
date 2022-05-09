let palindromes = (string) => prepString(string) === revString(string);

let revString = (string) => prepString(string).split('').reverse().join('');

let prepString = (string) => string.toLowerCase().replace(/\W/g,'');

module.exports = palindromes;

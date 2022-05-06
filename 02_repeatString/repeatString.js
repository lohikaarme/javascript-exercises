let repeatString = (string, n) => {
    if(n> 0) return string.repeat(n);
    else if (n==0) return '';
    else return 'ERROR';
};


// Do not edit below this line
module.exports = repeatString;
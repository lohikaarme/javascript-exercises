const ftoc = function(degree) {;
    return +((degree - 32) * (5 / 9)).toFixed(1)
        // TOP Solution // return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(degree) {
    return +(degree * (9 / 5) + 32).toFixed(1)
        // TOP Solution // return Math.round(((c * 9/5) + 32) * 10) / 10; 
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
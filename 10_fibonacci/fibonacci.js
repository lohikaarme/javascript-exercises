const fibonacci = function(fib) {
    let total = 1;
    let prevTotal = 1;
    if (fib < 0) return 'OOPS'
    for (let i = 2; i < fib; ++i) {
        total += prevTotal;
        prevTotal = total - prevTotal;
    };
    return total
};

// Do not edit below this line
module.exports = fibonacci;

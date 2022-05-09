const fibonacci = function(fib) {
    let total = 1;
    let prevTotal = 1;
    for (let i = 2; i < fib; ++i) {
        total += prevTotal;
        prevTotal = total - prevTotal;
    };
    return total
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(2));
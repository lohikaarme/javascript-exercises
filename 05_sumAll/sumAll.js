let sumAll = (...args) => {
    let sum = 0,
        min = Math.min(...args),
        max = Math.max(...args);

    if (min < 0 || args.some(arg => typeof arg != 'number')) {
        return 'ERROR'
    } else {
        for (let i = min; i <= max; i++) {
            sum += i
        };
            return sum
    }
};

module.exports = sumAll;
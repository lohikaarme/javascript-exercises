const sumAll = function(...args) {
    let sum = 0,
        min = Math.min(...args),
        max = Math.max(...args);

    if (min < 0) return 'ERROR';

    // refactored, for some arg of args checks if type is not number
    if (args.some(arg => typeof arg != 'number')) return 'ERROR';

    //old function
    //for (let value of args) {
    //    if (typeof(value) != 'number') return 'ERROR'
    //};

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

sumAll(10, '10');
// Do not edit below this line
module.exports = sumAll;
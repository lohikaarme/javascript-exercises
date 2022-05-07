let ctof = (deg) => parseFloat((deg * 9/5 + 32).toFixed(1));
let ftoc = (deg) => parseFloat(((deg - 32) * 5/9).toFixed(1));


module.exports = {
    ftoc,
    ctof
};
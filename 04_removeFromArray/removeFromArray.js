let removeFromArray = (ar, ...toRemove) => ar.filter(el => !toRemove.includes(el))
module.exports = removeFromArray;
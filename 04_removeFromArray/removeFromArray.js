const removeFromArray = function(array, ...values) {
    //if (values == null) return 'ERROR';
    //    for (let i = 0; i < values.length; i++) {
    for (let value of values) {
        if (array.indexOf(value) != -1) array.splice(array.indexOf(value), 1);
    }
    console.log(array);
    return array;

};


/*
// TOP Solution 1
 const removeFromArray = function (...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
*/

/*
// TOP Solution 2
// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.
var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
}
*/

// Do not edit below this line
module.exports = removeFromArray;
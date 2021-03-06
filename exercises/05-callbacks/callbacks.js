/**
 * Given a student name, formats and prints out the value in a visually appealing way
 * (e.g. with hyphens or astericks before each value) with `console.log`
 * @example
 *  - Jamal
 *  - Matina
 *  - Eddy
 * @param {string} name instuctor name
 */
const printer = (name) => {

  console.log(' - ' + name + '\n');

};

/**
 * Loops through the array of strings
 * and for each name, calls upon the function printer to print out the name
 * @param {array}
 * @param {function} callback printer function
 */
const printNames = (array, callback) => {

  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }



};

module.exports = {
  printer,
  printNames,
};

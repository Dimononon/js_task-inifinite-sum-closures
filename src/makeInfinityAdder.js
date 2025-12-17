'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    }
    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;

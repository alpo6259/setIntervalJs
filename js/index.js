`use strict`;

function printNumbers(from, to, interval) {
  let startValue = from;

  let getTimer = setInterval(function () {
    console.log(startValue);
    if (startValue >= to) {
      clearInterval(getTimer);
    }
    startValue += interval;
  }, 500);
}

printNumbers(1, 10, 2); //

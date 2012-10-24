/* Write some code to calculate the value of 2 ^ 10
have a function with two parameter, base and exponent
*/
function evenNumber(base, exponent) {
  // edge case
  if (base === 0) return 1;

  // tell him when to stop otherwise trash the browser console
  if (exponent == 0) return 1;
  console.log("Iteration was processed");
  return base * evenNumber(base, exponent - 1);
}

function doMath(base, exponent) {
  console.log(evenNumber(base, exponent));
}


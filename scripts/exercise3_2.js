/** XXX: Write a function greaterThan, which takes one argument, a number, and 
 *       returns a function that represents a test. When this returned function 
 *       is called with a single number as argument, it returns a boolean: true 
 *       if the given number is greater than the number that was used to create 
 *       the test function, and false otherwise.
 */
function greaterThan(number) {
  return function (testNumber) {
    if(number > testNumber) return true;
    else return false;  
  }
}

var defineNumber5 = greaterThan(5);
var compareWith = defineNumber(10);

console.log(compareWith);

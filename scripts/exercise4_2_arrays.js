/*Write a function range that takes one argument, a positive number, and returns
an array containing all numbers from 0 up to and including the given number.
An empty array can be created by simply typing []. Also remember that adding 
properties to an object, and thus also to an array, can be done by assigning 
them a value with the = operator. The length property is automatically updated 
when elements are added.*/
function setArray(n) {
  // Declare an empty array object
  var aArray = [];

  for (var i = 0; i <= n; i++) {
    aArray[i] = i;
  }
  
  // Pass the array to the console
  console.log(aArray);
}

// Call the method
setArray(10);

// Actual console output
// [10:21:53.062] [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Closure phenomenon illustrated in JS

// Declaring a global variable
var variable = "top-level";

// Defines the 'parent' function
function parentFunction() {
  // Declaring a local variable with the same name as the global one
  var variable = "local";

  // Defines the 'child' function, which is function inside a function
  function childFunction() {
    // print the variable on the console, this will be the 'local' one
    console.log(variable);
  }
  // returns the childFunction and points to the web console of the browser
  return childFunction;
}

// pass parentFunction() to a variable
var child = parentFunction();
child();

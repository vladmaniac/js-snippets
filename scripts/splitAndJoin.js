/*split and join are not precisely each other's inverse. string.split(x).join(x)
always produces the original value, but array.join(x).split(x) does not. Can you
give an example of an array where .join(" ").split(" ") produces a different
value? */
function splitAndJoin() {
  // Declare an Array
  var aArray = "The mexican is still drinking tzuica and this is not ok";
 
  // Split by " "
  var splittedArray = aArray.split(" ");
  console.log(splittedArray);

  // Initial array is...
  var originalArray = splittedArray.join(" ");
  console.log(originalArray);

  if (aArray === originalArray) var flag = true;
  else {
    throw new Error("Split and Join do not work as we expect them to do");
  }

  alert("string.split(x).join(x) always produces the original value is a " + 
        flag + "statement");

  var secondArray = ["The mexican ", "should ", "drink ", "only ", "tequila"];
  var joinedMexican = secondArray.join(" ");
  console.log(joinedMexican);

  // see if .join(" ").split(" ") produces the same value
  var splittedMexican = joinedMexican.split(" ");
  console.log(splittedMexican);

  // print the flag at the end, see where we are at
  print(flag);
}

splitAndJoin();

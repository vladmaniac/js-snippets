/* The solution for the cat problem talks about a 'set' of names. 
   A set is a collection of values in which no value may occur more than once. 
   If names are strings, can you think of a way to use an object to represent a set of names?
   Show how a name can be added to this set, how one can be removed, and how you
   can check whether a name occurs in it.
*/
function catNames() {
  var set = {"Spot": true};

  // Add "White Fang" to the set
  set["White Fang"] = true;

  // Remove "Spot"
  delete set["Spot"];

  // See if "Asoka" is in the set
  console.log("Asoka" in set);

}

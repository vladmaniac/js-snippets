/* Can you write a function catNames that takes a paragraph as an argument 
and returns an array of names?*/
function catNames(aArray) {
  alert(typeof(aArray));
  // spec: aArray is a paragraph
  if(typeof(aArray) != "string") 
    throw new Error("The input data is not String");

  var colon = aArray.indexOf(":");
  return aArray.slice(colon + 2).split(", ");
}

catNames("Cat: Pisi is drinking tequila like the mexicane namend: Juan");
catNames(25);

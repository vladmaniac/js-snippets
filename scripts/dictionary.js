// I did not write this, this is an example from the study material which I was
// playing with to see how it works

function Dictionary(startValues) {
  this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
  this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
  return this.values[name];
};
Dictionary.prototype.contains = function(name) {
  return Object.prototype.hasOwnProperty.call(this.values, name) &&
    Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
  forEachIn(this.values, action);
};

var colours = new Dictionary({Grover: "blue",
                              Elmo: "orange",
                              Bert: "yellow"});
show(colours.contains("Grover"));
show(colours.contains("constructor"));
colours.each(function(name, colour) {
  print(name, " is ", colour);
});

// Adding the forEachIn method since it is used here
function forEachIn(object, action) {
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property))
      action(property, object[property]);
  }
}


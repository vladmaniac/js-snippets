/* I just wanna test function.apply */
function cats(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
};

var cat = new cats("mike", 10, "maidanesse");

console.log(cat.name);
console.log(cat.age);
console.log(cat.breed);

function showOnlyName() {
  var showName = cats.apply(null, ["Vlad"]);
  console.log(showName);
}

showOnlyName();

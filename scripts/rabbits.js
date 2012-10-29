function Rabbit(adjective) {
  this.adjective = adjective;
}

Rabbit.prototype.speak = function(line) {
  console.log("The rabbit said --> " + line + "\n");
}

var animal = new Rabbit("fluffy");
animal.speak("Something");

// add new properties to the Rabbit
animal.age = 24;
console.log(animal.age);

console.log("speak called without prototype" + animal.speak("I am a rabbit and " + 
            "I am called without prototype\n\n"));
console.log(animal.prototype.speak("lalalalalalala singing"));

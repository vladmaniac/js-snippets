/**
 * Build a terrarium in which pretty bugs can move once a .5 second
 */

var thePlan =
  ["############################",
   "#      #    #      o      ##",
   "#                          #",
   "#          #####           #",
   "##         #   #    ##     #",
   "###           ##     #     #",
   "#           ###      #     #",
   "#   ####                   #",
   "#   ##       o             #",
   "# o  #         o       ### #",
   "#    #                     #",
   "############################"];

// This is a constructor for building Point objects
function Point(x, y) {
  this.x = x;
  this.y = y;
}

// This is adding another point by the given rule
// XXX: See return
Point.prototype.add = function(other) {
  return new Point(this.x + other.x, this.y + other.y);
};

// Checks whether the current point and the given one as parameter are equal
Point.prototype.isEqualTo = function(other) {
  return this.x == other.x && this.y == other.y;
};

console.log((new Point(3, 1)).add(new Point(2, 4)));

// Test this part a bit, uncomment if want to run the test and visualize the
// results in the console
var point1 = new Point();
point1.x = 5; point1.y=5;

var point2 = new Point(1, 1);
var point3 = point1.add(point2);
var point4 = new Point(1, 1);

point4.isEqualTo(point2);

/**
 * Implement a grid
 * The grid is a method to represent the plan in which the bugs move
 */
function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}

// Creating 4 methods, which by design would get a value, set one, verify we are
// inside the grid with a given point and eventually move a value
Grid.prototype.valueAt = function(point) {
  return this.cells[point.y * this.width + point.x];
};

Grid.prototype.setValueAt = function(point, value) {
  this.cells[point.y * this.width + point.x] = value;
};

Grid.prototype.isInside = function(point) {
  return point.x >= 0 && point.y >= 0 &&
         point.x < this.width && point.y < this.height;
};

Grid.prototype.moveValue = function(from, to) {
  this.setValueAt(to, this.valueAt(from));
  this.setValueAt(from, undefined);
};

Grid.prototype.each = function(action) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var point = new Point(x, y);
      action(point, this.valueAt(point));
    }
  }
};

// Testing ... grid
var point5 = new Point(5, 1);
var grid1 = new Grid(100, 100);

try {
  grid1.isInside(point5) == true;
} catch (ex) {
  throw new Error(arguments.callee.name, "Given point is outside the grid");
}

var point6 = new Point(22, 22);
grid1.setValueAt(point6, 25);

var testGrid = new Grid(3, 2);

testGrid.setValueAt(new Point(1, 0), "#");
testGrid.setValueAt(new Point(1, 1), "o");

testGrid.each(function(point, value) {
  print(point.x, ",", point.y, ": ", value);
});




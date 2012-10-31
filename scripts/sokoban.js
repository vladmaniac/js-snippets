/**
 * Create a sokoban game
 */

// Square object
var Square = {
  construct: function(character, tableCell) {
    this.background = "empty";
    if (character == "#")
      this.background = "wall";
    else if (character == "*")
      this.background = "exit";

    this.tableCell = tableCell;
    this.tableCell.className = this.background;

    this.content = null;
    if (character == "0")
      this.content = "boulder";
    else if (character == "@")
      this.content = "player";

    if (this.content != null) {
      var image = dom("IMG", {src: "img/sokoban/" +
                                   this.content + ".gif"});
      this.tableCell.appendChild(image);
    }
  },

  hasPlayer: function() {
    return this.content == "player";
  },
  hasBoulder: function() {
    return this.content == "boulder";
  },
  isEmpty: function() {
    return this.content == null && this.background == "empty";
  },
  isExit: function() {
    return this.background == "exit";
  }
};

var testSquare = Square.create("@", dom("TD"));
show(testSquare.hasPlayer());

Square.moveContent = function(target) {
  target.content = this.content;
  this.content = null;
  target.tableCell.appendChild(this.tableCell.lastChild);
};

Square.clearContent = function() {
  this.content = null;
  removeElement(this.tableCell.lastChild);
};

/**
 * SokobanField
 */
var SokobanField = {
  construct: function(level) {
    var tbody = dom("TBODY");
    this.squares = [];
    this.bouldersToGo = level.boulders;

    for (var y = 0; y < level.field.length; y++) {
      var line = level.field[y];
      var tableRow = dom("TR");
      var squareRow = [];
      for (var x = 0; x < line.length; x++) {
        var tableCell = dom("TD");
        tableRow.appendChild(tableCell);
        var square = Square.create(line.charAt(x), tableCell);
        squareRow.push(square);
        if (square.hasPlayer())
          this.playerPos = new Point(x, y);
      }
      tbody.appendChild(tableRow);
      this.squares.push(squareRow);
    }

    this.table = dom("TABLE", {"class": "sokoban"}, tbody);
    this.score = dom("DIV", null, "...");
    this.updateScore();
  },

  getSquare: function(position) {
    return this.squares[position.y][position.x];
  },
  updateScore: function() {
    this.score.firstChild.nodeValue = this.bouldersToGo + 
                                      " boulders to go.";
  },
  won: function() {
    return this.bouldersToGo <= 0;
  }
};

var testField = SokobanField.create(sokobanLevels[0]);
show(testField.getSquare(new Point(10, 2)).content);

SokobanField.place = function(where) {
  where.appendChild(this.score);
  where.appendChild(this.table);
};
SokobanField.remove = function() {
  removeElement(this.score);
  removeElement(this.table);
};

testField.place(document.body);

SokobanField.move = function(direction) {
  var playerSquare = this.getSquare(this.playerPos);
  var targetPos = this.playerPos.add(direction);
  var targetSquare = this.getSquare(targetPos);

  // Possibly pushing a boulder
  if (targetSquare.hasBoulder()) {
    var pushTarget = this.getSquare(targetPos.add(direction));
    if (pushTarget.isEmpty()) {
      targetSquare.moveContent(pushTarget);
    }
    else if (pushTarget.isExit()) {
      targetSquare.moveContent(pushTarget);
      pushTarget.clearContent();
      this.bouldersToGo--;
      this.updateScore();
    }
  }
  // Moving the player
  if (targetSquare.isEmpty()) {
    playerSquare.moveContent(targetSquare);
    this.playerPos = targetPos;
  }
};

var SokobanGame = {
  construct: function(place) {
    this.level = null;
    this.field = null;

    var newGame = dom("BUTTON", null, "New game");
    addHandler(newGame, "click", method(this, "newGame"));
    var reset = dom("BUTTON", null, "Reset level");
    addHandler(reset, "click", method(this, "reset"));
    this.container = dom("DIV", null,
                         dom("H1", null, "Sokoban"),
                         dom("DIV", null, newGame, " ", reset));
    place.appendChild(this.container);

    addHandler(document, "keydown", method(this, "keyDown"));
    this.newGame();
  },

  newGame: function() {
    this.level = 0;
    this.reset();
  },
  reset: function() {
    if (this.field)
      this.field.remove();
    this.field = SokobanField.create(sokobanLevels[this.level]);
    this.field.place(this.container);
  },

  keyDown: function(event) {
    if (arrowKeyCodes.contains(event.keyCode)) {
    event.stop();
    this.field.move(arrowKeyCodes.lookup(event.keyCode));
    if (this.field.won()) {
      if (this.level < sokobanLevels.length - 1) {
        alert("Excellent! Going to the next level.");
        this.level++;
        this.reset();
      }
      else {
        alert("You win! Game over.");
        this.newGame();
      }
    }
  }
};

Square.clearContent = function() {
  self.content = null;
  var image = this.tableCell.lastChild;
  var size = 100;

  var animate = setInterval(function() {
    size -= 10;
    image.style.width = size + "%";
    image.style.height = size + "%";

    if (size < 60) {
      clearInterval(animate);
      removeElement(image);
    }
  }, 70);
};



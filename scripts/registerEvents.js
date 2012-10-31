/**
 * Register an event, treat the IE case
 * Also then unregister it
 */
function registerEventHandler(node, event, handler) {
  if (typeof node.addEventListener == "function")
    node.addEventListener(event, handler, false);
  else
    node.attachEvent("on" + event, handler);
}

registerEventHandler($("button"), "click",
                     function(){print("Click (2)");});

function unregisterEventHandler(node, event, handler) {
  if (typeof node.removeEventListener == "function")
    node.removeEventListener(event, handler, false);
  else
    node.detachEvent("on" + event, handler);
}

function showEvent(event) {
  console.log(event || window.event);
}

registerEventHandler($("textfield"), "keypress", showEvent);

// Report clicking on an item
function reportClick(event) {
  event = event || window.event;

  var target = event.target || event.srcElement;
  var pageX = event.pageX, pageY = event.pageY;

  if (pageX == undefined) {
    pageX = event.clientX + document.body.scrollLeft;
    pageY = event.clientY + document.body.scrollTop;
  }

  print("Mouse clicked at ", pageX, ", ", pageY,
        ". Inside element:");
  console.log(target);
}

registerEventHandler(document, "click", reportClick);
unregisterEventHandler(document, "click", reportClick);

// Which key do we press
function printKeyCode(event) {
  event = event || window.event;
  console.log("Key " + event.keyCode + " was pressed.");
}

function printCharacter(event) {
  event = event || window.event;
  var charCode = event.charCode;
  if (charCode == undefined || charCode === 0)
    charCode = event.keyCode;
  print("Character '", String.fromCharCode(charCode), "'");
}

var textField = document.getElementById("textfield");

registerEventHandler(textField, "keydown", printKeyCode);

// A little testing
printCharacter("keydown");

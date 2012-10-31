/** 
 * How we can set attributes and not fail in IE
 */
function setNodeAttribute(node, attribute, value) {
  if (attribute == "class")
    node.className = value;
  else if (attribute == "checked")
    node.defaultChecked = value;
  else if (attribute == "for")
    node.htmlFor = value;
  else if (attribute == "style")
    node.style.cssText = value;
  else
    node.setAttribute(attribute, value);
}

var node = document.body.firstChild;
setNodeAttribute(node, "id", "bigbaloon");

// output stuff
console.log(node);


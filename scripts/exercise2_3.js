/** Function to 'draw' a triangle
 *  'I mean' print out some text that almost looks 
 *  like a triangle when you squint'.
 */
function drawTriangle() {
  var line = "";
  var counter = 0;

  while (counter < 10) {
    line = line + "#";
    print(line);
    counter = counter + 1;
  }
}

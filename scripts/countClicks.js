/** 
 * This should use the testpage.html
 * All I want is to count the clicks on the button element
 */
var button = document.getElementById("button");
var clicks = 0;

button.addEventListener("click", countClicks, false);

function countClicks() {
  clicks ++;
  return clicks;
}

button.removeEventListener("click", countClicks);

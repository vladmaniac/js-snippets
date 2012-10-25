/* The date part is always in the exact same place of a paragraph. 
How convenient. Write a function extractDate that takes such a paragraph as its 
argument, extracts the date, and returns it as a date object.*/
function extractDate(paragraph) {
  function numberAt(start, length) {
    return paragraph.slice(start, start + length);
  }
  return new Date(numberAt(11, 4), numberAt(8, 2) - 1, numberAt(5, 2));
}

alert(extractDate("died 27-04-2006: Black Leclère"));

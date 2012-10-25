/* Extend the range function from exercise 4.2 to take a second, optional
argument. If only one argument is given, it behaves as earlier and produces a
range from 0 to the given number. If two arguments are given, the first
indicates the start of the range, the second the end.*/
function range(start, end) {
  if (arguments.length < 2) {
    end = start;
    start = 0;
  }
  var result = [];
  for (var i = start; i <= end; i++)
    result.push(i);
  return result;
}

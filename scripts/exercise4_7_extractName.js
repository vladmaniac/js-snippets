/*The thing that extractMother does can be expressed in a more general way.
Write a function between that takes three arguments, all of which are strings.
It will return the part of the first argument that occurs between the patterns
given by the second and the third arguments.
So between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")") gives "Spot".
between("bu ] boo [ bah ] gzz", "[ ", " ]") returns "bah".
To make that second test work, it can be useful to know that indexOf can be
given a second, optional parameter that specifies at which point it should start
searching.*/
function between(string, start, end) {
  var startAt = string.indexOf(start) + start.length;
  var endAt = string.indexOf(end, startAt);

  return string.slice(startAt, endAt);
}

print(between("bu ] boo [ bah ] gzz", "[ ", " ]"));

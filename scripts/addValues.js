// add some values method
function add(number) {
  function value(val) {
    return number + val;  
  }
  return value;
}

var add5 = add(5);
console.log(add5);

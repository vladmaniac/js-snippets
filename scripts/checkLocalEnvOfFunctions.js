// See how the local environment is handled for functions defined inside other
// functions

var parents = 0;

function mother() {
  var parents = 1;
  var characteristics = new Object();
  characteristics.name = "Mom";
  characteristics.age = 27;
  
  function child() {
    return parents;
  }
  // add return to make it visible in the Firefox web console
  return child();
  // XXX: this is commented because of line 16 - we need to see this in the console
  // child();
  // XXX: if you don't want it returned, and still want the JS web console to throw
  //      it, just use the 'console' object and child() as a callback
  // console.info(child);
}

mother();

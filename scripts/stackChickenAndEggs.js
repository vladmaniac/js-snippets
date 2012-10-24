// the stack principle in function calling

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
print(chicken() + " came first.");

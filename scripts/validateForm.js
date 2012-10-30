/** 
 * Write a function to validate a form
 */
var userForm = document.forms.userinfo;

function validInfo(form) {
  if (form.elements.name.value !== "" && form.elements.email.value.contains("@")) return true;
  return false;
}

var result = validInfo(userForm);

if(result == false) throw new Error("Please fill in the form correctly!");

userForm.elements.send.onclick = function () {
  if (validInfo(userForm))
    userForm.submit();
}

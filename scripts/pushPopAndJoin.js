// Play with push, pop and join
function playSome() {
  var aArray = [];
  aArray.push("A mexican ");
  aArray.push("is drinking");
  aArray.push("tzuica");
  
  // console it down
  console.log(aArray);
  // alert(aArray);

  // Its wrong for a mexican to drink tzuica, switch to tequila please
  aArray.pop();
  aArray.push("tequila");
  
  aArray.join();

  // alert(aArray);
  return aArray;
}

playSome();

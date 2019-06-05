function showMessage(){
  var element1 = document.getElementById("message");
  var element2 = document.getElementById("triangle");

  if (element1.style.visibility == 'hidden' && element2.style.visibility == 'hidden'){
    element1.style.visibility = 'visible';
    element2.style.visibility = 'visible';
  }
  else{
    element1.style.visibility = 'hidden';
    element2.style.visibility = 'hidden';
  }
}

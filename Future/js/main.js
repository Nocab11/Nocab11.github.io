function showHideText(elem){ 

  
var hideText     = elem.parentElement.querySelector('.hideText');


  hideText.classList.toggle('ShowHideText');
  elem.classList.toggle('hide');
  
  
}
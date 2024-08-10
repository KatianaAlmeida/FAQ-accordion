function open_and_close(answerName, icon_plus, icon_minus){
  //console.log("Hello");
  const answerElement = document.querySelector(`.${answerName}`);
  const iconPlusElement = document.querySelector(`.${icon_plus}`);
  const iconMinusElement = document.querySelector(`.${icon_minus}`);
  
  if(!answerElement.classList.contains('open_js')){
    answerElement.classList.add('open_js');
    iconPlusElement.classList.add('close_js');
    iconMinusElement.classList.remove('close_js');
  }else{
    answerElement.classList.remove('open_js');
    iconMinusElement.classList.add('close_js');
    iconPlusElement.classList.remove('close_js');
  }
}
// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  /*Por defecto la pizza es sin gluten-free y sin sauce-white*/
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');

  addRemIngredients('.btn-pepperonni','.pep');
  addRemIngredients('.btn-green-peppers','.green-pepper');
  addRemIngredients('.btn-mushrooms','.mushroom');

});

/*
Función que añade o quita los ingredientes.
*/
function addRemIngredients(btn,target,toggle){
  $(btn).click(function(){
    $(this).toggleClass("active");

    if(toggle){
      $(target).toggleClass(toggleClass);
    }else{
      $(target).toggle();
    }

  })
}

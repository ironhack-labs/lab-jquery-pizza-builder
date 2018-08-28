// Write your Pizza Builder JavaScript in this file.
var pepperonis = $('.btn-pepperonni');
var mushrooms = $('.btn-mushrooms');
var greenPeppers = $('.btn-green-peppers');
var whiteSauce = $('.btn-sauce');
var glutenFree = $('.btn-crust');
removeIngredient('.pep')
removeIngredient('.mushroom')
removeIngredient('.green-pepper')


function removeIngredient(ingredient){
  $(ingredient).hide();
 
}
function addIngredient(ingredient){
  $(ingredient).show();
}

pepperonis.click(function (){
  if($(this).hasClass('ingredient-added')){
  removeIngredient('.pep');
  pepperonis.removeClass('ingredient-added');
  }else{
    addIngredient('.pep');
    pepperonis.addClass('ingredient-added');
  }
});

mushrooms.click(function(){
  if($(this).hasClass('ingredient-added')){
    removeIngredient('.mushroom');
    mushrooms.removeClass('ingredient-added');
  } else {
    addIngredient('.mushroom');
    mushrooms.addClass('ingredient-added');
  }
})
greenPeppers.click(function(){
  if($(this).hasClass('ingredient-added')){
    removeIngredient('.green-pepper');
    greenPeppers.removeClass('ingredient-added');
  } else {
    addIngredient('.green-pepper');
    greenPeppers.addClass('ingredient-added');
  }
})
whiteSauce.on('click',function(){
  $('.sauce').toggleClass('sauce-white')
});
glutenFree.on('click',function(){
  $('.crust').toggleClass('crust-gluten-free')
});

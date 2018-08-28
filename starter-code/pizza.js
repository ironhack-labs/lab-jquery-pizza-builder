// Write your Pizza Builder JavaScript in this file.
var pepperonis = $('.btn-pepperonni');
var mushrooms = $('.btn-mushrooms');
var greenPeppers = $('.btn-green-peppers');
var whiteSauce = $('.btn-sauce');
var glutenFree = $('.btn-crust');
removeIngredient('.pep')
removeIngredient('.mushroom')
removeIngredient('.green-pepper')
pepperonis.removeClass('active')
mushrooms.removeClass('active')
greenPeppers.removeClass('active')
whiteSauce.removeClass('active')

function removeIngredient(ingredient){
  $(ingredient).hide();
 
}
function addIngredient(ingredient){
  $(ingredient).show();
}

pepperonis.click(function (){
  if($(this).hasClass('active')){
  removeIngredient('.pep');
  pepperonis.removeClass('active');
  }else{
    addIngredient('.pep');
    pepperonis.addClass('active');
  }
});

mushrooms.click(function(){
  if($(this).hasClass('active')){
    removeIngredient('.mushroom');
    mushrooms.removeClass('active');
  } else {
    addIngredient('.mushroom');
    mushrooms.addClass('active');
  }
})
greenPeppers.click(function(){
  if($(this).hasClass('active')){
    removeIngredient('.green-pepper');
    greenPeppers.removeClass('active');
  } else {
    addIngredient('.green-pepper');
    greenPeppers.addClass('active');
  }
})
whiteSauce.on('click',function(){
  $('.sauce').toggleClass('sauce-white')
});
glutenFree.on('click',function(){
  $('.crust').toggleClass('crust-gluten-free')
});

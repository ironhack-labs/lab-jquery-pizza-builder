// Write your Pizza Builder JavaScript in this file.
var pepperonis = $('.btn-pepperonni');
var mushrooms = $('.btn-mushrooms');
var greenPeppers = $('.btn-green-peppers');
var whiteSauce = $('.btn-sauce');
var glutenFree = $('.btn-crust');
var listPrice = $('.price li');
var totalPrice = $('.price strong')
var price=13;
// removeIngredient('.pep')
// removeIngredient('.mushroom')
// removeIngredient('.green-pepper')
$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");
removeIngredientPrice(3);
removeIngredientPrice(4);
console.log(totalPrice)
totalPrice[0].innerHTML="$"+price;
// pepperonis.removeClass('active')
// mushrooms.removeClass('active')
// greenPeppers.removeClass('active')
whiteSauce.removeClass('active')
glutenFree.removeClass('active')
function removeIngredient(ingredient){
  $(ingredient).hide();
 
}
function addIngredient(ingredient){
  $(ingredient).show();
}

function addIngredientPrice(index){
 $(listPrice[index]).show(); 
}

function removeIngredientPrice(index){
  $(listPrice[index]).hide(); 
 }
function setPrice(sum){
  price=price+sum
  totalPrice[0].innerHTML="$"+price
}
pepperonis.click(function (){
  if($(this).hasClass('active')){
    removeIngredient('.pep');
    removeIngredientPrice(0);
    pepperonis.removeClass('active');
    setPrice(-1);
  }else{
    addIngredient('.pep');
    pepperonis.addClass('active');
    addIngredientPrice(0);
    setPrice(1);
  }

});

mushrooms.click(function(){
  if($(this).hasClass('active')){
    removeIngredient('.mushroom');
    removeIngredientPrice(1);
    mushrooms.removeClass('active');
    setPrice(-1);
  } else {
    addIngredient('.mushroom');
    mushrooms.addClass('active');
    addIngredientPrice(1);
    setPrice(1);
  }
})
greenPeppers.click(function(){
  if($(this).hasClass('active')){
    removeIngredient('.green-pepper');
    removeIngredientPrice(2);
    greenPeppers.removeClass('active');
    setPrice(-1);
  } else {
    addIngredient('.green-pepper');
    greenPeppers.addClass('active');
    addIngredientPrice(2);
    setPrice(1);
  }
})
whiteSauce.on("click", function() {
  if ($(this).hasClass("active")) {
    $(".sauce").removeClass("sauce-white");
    $(this).removeClass("active");
    removeIngredientPrice(3);
    setPrice(-3);
  } else {
    $(".sauce").addClass("sauce-white");
    $(this).addClass("active");
    addIngredientPrice(3);
    setPrice(3);
  }
});
glutenFree.on('click',function(){
  if ($(this).hasClass("active")) {
    $(".crust").removeClass("crust-gluten-free");
    $(this).removeClass("active");
    removeIngredientPrice(4);
    setPrice(-5);
  } else {
    $(".crust").addClass("crust-gluten-free");
    $(this).addClass("active");
    addIngredientPrice(4);
    setPrice(5);
  }
});

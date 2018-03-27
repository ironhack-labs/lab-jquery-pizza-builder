// Write your Pizza Builder JavaScript in this file.

var $toppingButtons = $(".btn");

var $greenPepperButton = $(".btn-green-peppers");
var $pepperonniButton = $(".btn-pepperonni");
var $mushroomsButton = $(".btn-mushrooms");


$greenPepperButton.on('click',function (){
  $(this).toggleClass("active");
  $(".green-pepper").toggle();
  $(".panel.price li:contains(green peppers)").toggle();
});

$pepperonniButton.on('click', function(){
  $(this).toggleClass("active");
  $(".pep").toggle();
  $(".panel.price li:contains(pepperonni)").toggle();
});

$mushroomsButton.on('click', function(){
  $(this).toggleClass("active");
  $(".mushroom").toggle();
  $(".panel.price li:contains(mushrooms)").toggle();
});


var $sauceButton = $(".btn-sauce");
var $crustButton = $(".btn-crust");

$crustButton.on('click', function() {
  $(this).toggleClass("active")
  $(".crust").toggleClass("crust-gluten-free")
  $(".panel.price li:contains(crust)").toggle();
});

$sauceButton.on('click', function(){
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white")
  $(".panel.price li:contains(sauce)").toggle();
})

/* Byron no nos dejo acabar esto
var pepperonniPrice = 1;
var mushroomPrice = 1;
var greenPepperPrice = 1;
var whiteSaucePrice = 3;
var glutenFreePrice = 5;

var $finalPrice = $(".panel.price strong").
*/




/*
var toggleActive = function (){
$(this).toggleClass("active");
};

$sauceButton.on("click", toggleActive);
*/

// Write your Pizza Builder JavaScript in this file.

var $toppingButtons = $(".btn");

var $greenPepperButton = $(".btn-green-peppers");
var $pepperonniButton = $(".btn-pepperonni");
var $mushroomsButton = $(".btn-mushrooms");


$greenPepperButton.on('click',function (){
  $(this).toggleClass("active");
  $(".green-pepper").toggle();
});

$pepperonniButton.on('click', function(){
  $(this).toggleClass("active");
  $(".pep").toggle();
  //$("li:contains()").text("pepperonni").toggle();
});

$mushroomsButton.on('click', function(){
  $(this).toggleClass("active");
  $(".mushroom").toggle();
});


var $sauceButton = $(".btn-sauce");
var $crustButton = $(".btn-crust");

$crustButton.on('click', function() {
  $(this).toggleClass("active")
  $(".crust").toggleClass("crust-gluten-free")
});

$sauceButton.on('click', function(){
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white")
})



/*
var toggleActive = function (){
$(this).toggleClass("active");
};

$sauceButton.on("click", toggleActive);
*/

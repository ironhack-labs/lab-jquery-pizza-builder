// Write your Pizza Builder JavaScript in this file.
var $pepperonniButton = $('.btn-pepperonni');
var $mushroomButton = $('.btn-mushrooms');
var $greenPepperButton = $('.btn-green-peppers');
var $sauceButton = $('.btn-sauce');
var $crustButton = $('.btn-crust');

var $pepperonni = $('.pep');
var $mushroom = $('.mushroom');
var $greenPepper = $('.green-pepper');
var $glutenFreeCrust = $('.crust-gluten-free');
var $normalCrust = $('.crust');
var $typeOfSauce = $('.sauce')
var $activate = $('.active');

var $pizzaPrices = $('.price ul li');

$pepperonniButton.click(function() {
    $pepperonni.toggle();
    $($activate[0]).toggleClass("active", 'btn btn-pepperonni');
    $($pizzaPrices[0]).toggle()

});
$mushroomButton.click(function() {
    $mushroom.toggle();
    $($activate[1]).toggleClass("active", 'btn btn-mushroom');
    $($pizzaPrices[1]).toggle()


});
$greenPepperButton.click(function() {
    $greenPepper.toggle();
    $($activate[2]).toggleClass("active", 'btn btn-green-pepper');
    $($pizzaPrices[2]).toggle()


});
$sauceButton.click(function() {
    $typeOfSauce.toggleClass('sauce-white', 'sauce');
    $($activate[3]).toggleClass("active", 'btn btn-sauce');
    $($pizzaPrices[3]).toggle()

})

$crustButton.click(function() {
   $glutenFreeCrust.toggleClass( 'crust-gluten-free','crust');
   $($activate[4]).toggleClass("active", 'btn btn-crust');
   $($pizzaPrices[4]).toggle()

})



function main() {
    $glutenFreeCrust.toggleClass( 'crust-gluten-free','crust');
    $($pizzaPrices[0]).toggle()
    $($pizzaPrices[1]).toggle()
    $($pizzaPrices[2]).toggle()
    $($pizzaPrices[3]).toggle()
    $($pizzaPrices[4]).toggle()



    $pepperonni.toggle();
    $mushroom.toggle();
    $greenPepper.toggle();



}

$(main);
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


$pepperonniButton.click(function() {
    $pepperonni.toggle();
    $($activate[0]).toggleClass("active", 'btn btn-pepperonni');

});
$mushroomButton.click(function() {
    $mushroom.toggle();
    $($activate[1]).toggleClass("active", 'btn btn-mushroom');


});
$greenPepperButton.click(function() {
    $greenPepper.toggle();
    $($activate[2]).toggleClass("active", 'btn btn-green-pepper');


});
$sauceButton.click(function() {
    $typeOfSauce.toggleClass('sauce-white', 'sauce');
    $($activate[3]).toggleClass("active", 'btn btn-sauce');

})

$crustButton.click(function() {
   $glutenFreeCrust.toggleClass( 'crust-gluten-free','crust');
   $($activate[4]).toggleClass("active", 'btn btn-crust');

})



function main() {
    $glutenFreeCrust.toggleClass( 'crust-gluten-free','crust');
}

$(main);
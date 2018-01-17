// Write your Pizza Builder JavaScript in this file.

// ITERATION 1

var $buttonPepperonni = $('.btn-pepperonni');
var $buttonMushroom = $('.btn-mushrooms');
var $buttongreenPeppers = $('.btn-green-peppers');


$buttonPepperonni.click (function () {
    var $pepperonni = $('.pep');
    $pepperonni.toggleClass('hide');
    $(this).toggleClass('active');
    updatePriceItem(1);
});

$buttonMushroom.click (function () {
    var $mushroom = $('.mushroom');
    $mushroom.toggleClass('hide');
    $(this).toggleClass('active');
});

$buttongreenPeppers.click (function () {
    var $greenPeppers = $('.green-pepper');
    $greenPeppers.toggleClass('hide');
    $(this).toggleClass('active');
});


// ITERATION 2

var $buttonCrustGlutenFree = $('.btn-crust');
var $buttonSauceWhite = $('.btn-sauce');

$buttonCrustGlutenFree.click (function () {
    var $crust = $('.crust');
    $crust.toggleClass('crust-gluten-free');
    $(this).toggleClass('active');
})

$buttonSauceWhite.click (function () {
    var $sauce = $('.sauce');
    $sauce.toggleClass('sauce-white');
    $(this).toggleClass('active');
})

// ITERATION 4

function updatePriceItem (itemNumber) {
    $hiddenElement = $('price ul:nth-child('+itemNumber+')');
    $hiddenElement.toggleClass('hide');
}

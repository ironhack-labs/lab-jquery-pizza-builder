// Write your Pizza Builder JavaScript in this file.


var $pizza = $('#pizza');
var $price = $('.panel li');

/***** Pepperonni ****/

var $peppeButton = $('.btn-pepperonni');
var $allPeppe = $('.pep');

$peppeButton.on('click', function(){
    $allPeppe.toggle();
    $peppeButton.toggleClass('active');
});


/***** Mushroom ****/

var $mushButton = $('.btn-mushrooms');
var $allMush = $('.mushroom');

$mushButton.on('click', function () {
    $allMush.toggle();
    $mushButton.toggleClass('active');
})

/***** Green Peppers ****/

var $greenButton = $('.btn-green-peppers');
var $allGreen = $('.green-pepper');

$greenButton.on('click', function () {
    $allGreen.toggle();
    $greenButton.toggleClass('active');
});

/***** Crush ****/

var $crushButton = $('.btn-crust');
var $crush = $('.crust')
$pizza.removeClass('crust-gluten-free');

$crushButton.on('click', function(){
    $crush.toggleClass('crust-gluten-free');
    $crushButton.toggleClass('active')
})

/***** Sauce ****/

var $sauceButton = $('.btn-sauce')
var $sauce = $('.sauce');
$pizza.removeClass('sauce-white');

$sauceButton.on('click', function(){
    $sauce.toggleClass('sauce-white');
    $sauceButton.toggleClass('active');
})
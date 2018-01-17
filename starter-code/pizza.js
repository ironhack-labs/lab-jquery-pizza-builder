// Write your Pizza Builder JavaScript in this file.


var $pizza = $('#pizza');

/***** Pepperonni ****/

var $peppeButton = $('.btn-pepperonni');
var $allPeppe = $('.pep');

$peppeButton.on('click', function(){
    $allPeppe.toggle();
});


/***** Mushroom ****/

var $mushButton = $('.btn-mushrooms');
var $allMush = $('.mushroom');

$mushButton.on('click', function () {
        $allMush.toggle();
})

/***** Green Peppers ****/

var $greenButton = $('.btn-green-peppers');
var $allGreen = $('.green-pepper');

$greenButton.on('click', function () {
    $allGreen.toggle();
});

/***** Crush ****/

var $crushButton = $('.btn-crust');
var $crush = $('.crust')
$pizza.removeClass('crust-gluten-free');

$crushButton.on('click', function(){
    $crush.toggleClass('crust-gluten-free');
})

/***** Sauce ****/
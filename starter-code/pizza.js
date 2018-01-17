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
$pizza.removeClass('crust-gluten-free');
$pizza.addClass('crust');

$crushButton.on('click', function(){
    if ($pizza.hasClass('crust')){
        $pizza.removeClass('crust')
        $pizza.addClass('crust-gluten-free'); 
    } else{
        $pizza.removeClass('crust-gluten-free');
        $pizza.addClass('crust'); 
    }
})

/***** Sauce ****/
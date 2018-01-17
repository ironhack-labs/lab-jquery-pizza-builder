// Write your Pizza Builder JavaScript in this file.

'use strict'


function main () {

var $div = $('<div>Hiii</div>');
var $body = $('body');
$body.append($div);


var $pizza = $('#pizza section');
var $pepperonnis = $('.pep');
var $greenPeppers = $('.green-pepper');
var $mushrooms = $('.mushroom');
var $crustGlutenFree = $('.crust-gluten-free');
var $sauceWhite = $('.sauce-white');


var $button = $('.btn');
var $pepperonnisButton = $('.btn-pepperonni');
var $greenPeppersButton = $('.btn-green-peppers');
var $mushroomsButton = $('.btn-mushrooms');



$crustGlutenFree.removeClass('.crust-gluten-free');
$sauceWhite.removeClass('.sauce-white');


// $pepperonnisButton.click(function () {
//     $pizza.toggleClass('pep');
//     alert('remove peperonis');

//     });
// alert('porque no funciona');
// };

// Pepperonni



$pepperonnisButton.click(function () {
    $pepperonnis.toggle();
    });

// Mushroom

$mushroomsButton.click(function () {
    $mushrooms.toggle();
});

// Green-Pepper

$greenPeppersButton.click(function () {
    $greenPeppers.toggle();
});




};


$(main);
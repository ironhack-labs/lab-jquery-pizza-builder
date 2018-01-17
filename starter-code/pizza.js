// Write your Pizza Builder JavaScript in this file.
'use strict';

function main () {



/*=== First Iteration ===*/

var $greenPeppers = $('.green-pepper');
var $mushrooms = $('.mushroom div');
var $pepps = $('.pep');
var $greenPepPrice = $('.price li:nth-child(3)');
var $mushroomsPrice = $('.price li:nth-child(2)');
var $pepPrice = $('.price li:nth-child(1)');
var $whiteSaucePrice = $('.price li:nth-child(4)');
var $glutenFreeCrustPrice = $('.price li:nth-child(5)');
var total = 10;
var $pizzaTotal = $('strong');

var $greenPepperBtn = $('.btn-green-peppers');
$greenPepperBtn.on('click', function(){
    $greenPeppers.toggleClass('green-pepper');
    $greenPepperBtn.toggleClass('active');
    $greenPepPrice.toggle();
    if ($greenPepperBtn.hasClass('active')){
        total+=1;
    } else {
        total-=1;
    }
    updateTotal();
});

var $mushroomBtn = $('.btn-mushrooms');
$mushroomBtn.on('click', function(){
    $mushrooms.toggle();
    $mushroomBtn.toggleClass('active');
    $mushroomsPrice.toggle();
    if ($mushroomBtn.hasClass('active')){
        total+=1;
    } else {
        total-=1;
    }
    updateTotal();
});

var $pepperBtn = $('.btn-pepperonni');
$pepperBtn.on('click', function(){
    $pepps.toggle();
    $pepperBtn.toggleClass('active');
    $pepPrice.toggle();
    if ($pepperBtn.hasClass('active')){
        total+=1;
    } else {
        total-=1;
    }
    updateTotal();
});


/*=== Second + Third Iteration  ===*/
var $crust = $('.crust');
var $sauce = $('.sauce');

$crust.removeClass('crust-gluten-free');
$sauce.removeClass('sauce-white');


 var $sauceBtn = $('.btn-sauce');
 var $crustBtn = $('.btn-crust');

$sauceBtn.removeClass('active');
$crustBtn.removeClass('active');

$whiteSaucePrice.hide();
$glutenFreeCrustPrice.hide();

if ($sauceBtn.hasClass('active')){
    total+=1;
} else {
    total-=1;
};

 $sauceBtn.on('click', function(){
    $sauce.toggleClass('sauce-white');
    $sauceBtn.toggleClass('active');
    $whiteSaucePrice.toggle();
    if ($sauceBtn.hasClass('active')){
        total+=1;
    } else {
        total-=1;
    }
    updateTotal();

 });

 if ($crustBtn.hasClass('active')){
    total+=1;
} else {
    total-=1;
};

 $crustBtn.on('click', function(){
     $crust.toggleClass('crust-gluten-free');
     $crustBtn.toggleClass('active');
     $glutenFreeCrustPrice.toggle();
     if ($crustBtn.hasClass('active')){
        total+=1;
    } else {
        total-=1;
    }
    updateTotal();
 } );


function updateTotal (){
    $pizzaTotal = '$' + total;
}

}

$(main);
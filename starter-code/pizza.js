// Write your Pizza Builder JavaScript in this file.
$('document').ready(function(){

// Vars    
var $btnTopping = $('.btn');
var $pepperonni = $('.pep');
var $mushrooms = $('.mushroom');
var $greenPepper = $('.green-pepper');
var $sauceWhite = $('.sauce-white');
var $glutenFree = $('.crust-gluten-free');
//List vars: 
var $listPep = $('aside li:first');
var $listMushroom = $('aside li:nth-child(2)');
var $listGreen = $('aside li:nth-child(3)');
var $listWhiteSauce = $('aside li:nth-child(4)');
var $listGluten = $('aside li:last');



// Reset default pizza 
$btnTopping.removeClass('active');
//Default pizza crust and sauce
$('#pizza .crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');

// Hidding list items
$listWhiteSauce.hide();
$listGluten.hide();



//Button events
$('.btn-pepperonni').click(function() {
    toggleTopping($pepperonni);
    toggleActive(this);
    ingredientsListing($listPep);
    getTotalPrice($listPep);
    
});
$('.btn-mushrooms').click(function() { 
    toggleTopping($mushrooms);
    toggleActive(this);
    ingredientsListing($listMushroom);
    
$('.btn-green-peppers').click(function() { 
    toggleTopping($greenPepper);
    toggleActive(this);
    ingredientsListing($listGreen);
});
$('.btn-sauce').click(function() { 
    toggleTopping($sauceWhite)
    toggleActive(this);
    ingredientsListing($listWhiteSauce);

});
$('.btn-crust').click(function() { 
    toggleTopping($glutenFree)
    toggleActive(this);
    ingredientsListing($listGluten);
});

// Functions
function toggleTopping(ingredient) {
    ingredient.hasClass('crust') ? ingredient.toggleClass('crust-gluten-free') 
    : ingredient.hasClass('sauce') ? ingredient.toggleClass('sauce-white')
    : $(ingredient).toggle();
}

function toggleActive(btn) {
    $(btn).toggleClass('active');
}


function ingredientsListing(ingredient, buttonStatus){
    $(ingredient).toggle();
}

});


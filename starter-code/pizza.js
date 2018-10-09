//buttons
var buttonPepperonnis = $('.btn-pepperonni');
var buttonMushrooms = $('.btn-mushrooms');
var buttonGreenPeppers = $('.btn-green-peppers');
var buttonWhiteSauce = $('.btn-sauce');
var buttonGluten = $('.btn-crust');

//ingredients
var pepIngrendient = $('.pep');
var mushroomIngrendient = $('.mushroom');
var greenPepperIngrendient = $('.green-pepper');

//list panel
var pricePepperonnis = $(".panel.price ul li:contains('pepperonni')");
var priceMushrooms = $(".panel.price ul li:contains('mushrooms')");
var priceGreenPeppers = $(".panel.price ul li:contains('green peppers')");
var priceSauce = $(".panel.price ul li:contains('white sauce')");
var priceGluten = $(".panel.price ul li:contains('gluten-free crust')");

//options 
var sauce = $('.sauce');
var crust = $('.crust');

function addRemoveIngredients(button, ingredient, price) {
    button.click(function() {
        $(this).toggleClass('active');
        ingredient.toggle();
        $(this).hasClass('active') ? price.css({ 'display': 'block' }).removeClass('not-calculate') : price.css({ 'display': 'none' }).addClass('not-calculate');

        if (ingredient.hasClass('sauce')) {
            ingredient.toggleClass('sauce-white');
        } else if (ingredient.hasClass('crust')) {
            ingredient.toggleClass('crust-gluten-free');
        }
        calculatePrice();
    })
}

function calculatePrice() {
    var listIngredient = $('.price ul li');
    var sum = 0;
    var pizzaBasePrice = parseInt($('.price b').text().substr(1, 2));

    listIngredient.each(function(ingredient) {
        $(this).css('display') !== 'none' ? sum += parseInt($(this).text().substr(1, 2)) : null;
    });
    return $('strong').text('$' + (sum + pizzaBasePrice));
}

$(document).ready(function() {
    addRemoveIngredients(buttonPepperonnis, pepIngrendient, pricePepperonnis);
    addRemoveIngredients(buttonMushrooms, mushroomIngrendient, priceMushrooms);
    addRemoveIngredients(buttonGreenPeppers, greenPepperIngrendient, priceGreenPeppers);

    addRemoveIngredients(buttonWhiteSauce, sauce, priceSauce);
    addRemoveIngredients(buttonGluten, crust, priceGluten);
});
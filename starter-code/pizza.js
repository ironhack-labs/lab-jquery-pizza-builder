// Write your Pizza Builder JavaScript in this file.
function main() {
    // Iteration 1
    addRemovePep();
    addRemoveMushorooms();
    addRemoveGreenPeppers();
    // Iteration 2
    glutenFreeCrust();
    whiteSauce();
    calculateTotalPrice();
}

function listIngredients(ingredient) {
    $('aside>ul>li:contains('+ingredient+')').toggle();
}

function calculateTotalPrice() {
    var ingredients = $('aside>ul>li');
    var totalPrice = 10;
    $(ingredients).each(function(index, li){
        if($(li).is(":visible")) {
            totalPrice += parseInt($(li).text().substring(1,2));
        }
    });
    $('aside>strong').text("$" + totalPrice);
}

function addRemovePep() {
    $('.btn-pepperonni').on('click', function() {
        $('.pep').toggle();
        $(this).toggleClass('active');
        listIngredients("pepperonni");
        calculateTotalPrice();
    });
}

function addRemoveMushorooms() {
    $('.btn-mushrooms').on('click', function() {
        $('.mushroom').toggle();
        $(this).toggleClass('active');
        listIngredients("mushrooms");
        calculateTotalPrice();
    });
}

function addRemoveGreenPeppers() {
    $('.btn-green-peppers').on('click', function() {
        $('.green-pepper').toggle();
        $(this).toggleClass('active');
        listIngredients("green peppers");
        calculateTotalPrice();
    });
}

function glutenFreeCrust() {
    $('.crust').removeClass('crust-gluten-free');
    $('.btn-crust').removeClass('active');
    listIngredients("crust");
    $('.btn-crust').on('click', function() {
        $('.crust').toggleClass('crust-gluten-free');
        $(this).toggleClass('active');
        listIngredients("crust");
        calculateTotalPrice();
    });
}

function whiteSauce() {
    $('.sauce').removeClass('sauce-white');
    $('.btn-sauce').removeClass('active');
    listIngredients("sauce");
    $('.btn-sauce').on('click', function() {
        $('.sauce').toggleClass('sauce-white');
        $(this).toggleClass('active');
        listIngredients("sauce");
        calculateTotalPrice();
    });
}



$(document).ready(main);

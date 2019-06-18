// Write your Pizza Builder JavaScript in this file.
let pepperonniButton = $(".btn-pepperonni").eq(0);
let mushroomButton = $(".btn-mushrooms").eq(0);
let greenPepperButton = $(".btn-green-peppers").eq(0);
let whiteSauceButton = $(".btn-sauce").eq(0);
let glutenFreeButton = $(".btn-crust").eq(0);

let pepPrice = $(".price li:contains(pepperonni)");
let muPrice = $(".price li:contains(mushroom)");
let gpPrice = $(".price li:contains(green)");
let wsPrice = $(".price li:contains(white sauce)");
let gfPrice = $(".price li:contains(gluten)");


pepperonniButton.click(function(){
    pepPrice.toggle();
    $('.pep').fadeToggle(500);
});

mushroomButton.click(function(){
    muPrice.toggle();
    $('.mushroom').fadeToggle(500);
});

greenPepperButton.click(function(){
    gpPrice.toggle();
    $('.green-pepper').fadeToggle(500);
});

whiteSauceButton.click(function(){
    wsPrice.toggle();
    let itHasWhite = $('.sauce').hasClass('sauce-white');
    if (itHasWhite === false) {
        $('.sauce').addClass('sauce-white');
        // $('.btn-sauce').addClass('active');
    } else {
        $('.sauce').removeClass('sauce-white');
        // $('.btn-sauce').removeClass('active');
    }
});

glutenFreeButton.click(function(){
    gfPrice.toggle();
    let itHasNoGluten = $('.crust').hasClass('crust-gluten-free');
    if (itHasNoGluten === false) {
        $('.crust').addClass('crust-gluten-free');
        // $('.btn-crust').addClass('active');
    } else {
        $('.crust').removeClass('crust-gluten-free');
        // $('.btn-crust').removeClass('active');
    }
});


function calculate() {
    let addPep = $('.btn-pepperonni').hasClass('active');
    let addMush = $('.btn-mushrooms').hasClass('active');
    let addGreen = $('.btn-green-peppers').hasClass('active');
    let addWS = $('.btn-sauce').hasClass('active');
    let addGF = $('.btn-crust').hasClass('active');
    
    let total = 10;
    
    if (addPep) {
        total+=1;
    }
    if (addMush) {
        total+=1;
    }
    if (addGreen) {
        total+=1;
    }
    if (addWS) {
        total+=3;
    }
    if (addGF) {
        total+=5;
    }
    $(".price strong").text(`$${total}`);
}

$('.btn').click(function() {
    $(this).toggleClass('active');
    calculate();
})
// Write your Pizza Builder JavaScript in this file.
let pepPrice = 1;
let mushPrice = 1;
let greenPrice = 1;
let saucePrice = 0;
let crustPrice = 0;
function totalPrice() {return 10 + pepPrice + mushPrice + greenPrice + saucePrice + crustPrice;}

$('.btn-pepperonni').click(function (){
    $(this).toggleClass('active');
    $('.pep').toggle();
    $('.price-pep').toggle();
    if (pepPrice===1) {
        pepPrice = 0;
    }
    else {
        pepPrice = 1;
    }
    $('#total-price').text('$' + totalPrice());
});

$('.btn-mushrooms').click(function (){
    $(this).toggleClass('active');
    $('.mushroom').toggle();
    $('.price-mush').toggle();
    if (mushPrice===1) {
        mushPrice = 0;
    }
    else {
        mushPrice = 1;
    }
    $('#total-price').text('$' + totalPrice());
});

$('.btn-green-peppers').click(function (){
    $(this).toggleClass('active');
    $('.green-pepper').toggle();
    $('.price-green').toggle();
    if (greenPrice===1) {
        greenPrice = 0;
    }
    else {
        greenPrice = 1;
    }
    $('#total-price').text('$' + totalPrice());
});

$('.btn-sauce').click(function (){
    $(this).toggleClass('active');
    $('.sauce').toggleClass('sauce-white');
    $('.price-sauce').toggle();
    if (saucePrice===0) {
        saucePrice = 3;
    }
    else {
        saucePrice = 0;
    }
    $('#total-price').text('$' + totalPrice());
});

$('.btn-crust').click(function (){

    $('.crust').toggleClass('crust-gluten-free');
    $('.price-crust').toggle();
    if (crustPrice===0) {
        crustPrice = 5;
    }
    else {
        crustPrice = 0;
    }
    $('#total-price').text('$' + totalPrice());
});



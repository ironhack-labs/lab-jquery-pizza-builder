// Write your Pizza Builder JavaScript in this file.

//Fetches pepperoni, mushrooms and green peppers' subtotalelement
let pepSubTotal = $(".price li")[0];
let mushSubTotal = $(".price li")[1];
let greSubTotal = $(".price li")[2];

//Adds and removes toppings from pizza image && Toggles Active feature && Toggles respective list item in price list
$('.btn-pepperoni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperoni').toggleClass('active');
    $('.price li:contains(pepperoni)').toggle();
})

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.price li:contains(mush)').toggle();
})

$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.price li:contains(green)').toggle();
}) 

//Adds and removes Gluten free crust and white sauce && Toggles active feature
$('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.price li:contains(white)').toggle();
})

$('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.price li:contains(gluten)').toggle();
})

//Hides White Sauce and Gluten Free Crust from the price list
$('.price li:contains(sauce)').hide()
$('.price li:contains(crust)').hide()

//Updates Total Price according to active ingredients
let totalPrice = $('.price strong')[0].innerHTML
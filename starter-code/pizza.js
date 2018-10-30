// Write your Pizza Builder JavaScript in this file.

$(function() {

var pizzaPrice = 10;

function checkPizzaPrice() {

    pizzaPrice = 10;

    ($('.panel.price li:visible').each(function (e){
        pizzaPrice += parseInt(($( this ).text().split(' ')[0]).split('$')[1])
  }))

  $('.panel.price strong').html('$'+pizzaPrice)
  
}

checkPizzaPrice();
function hasClass(ingredient, buttonIngredient) {
    if (!$('#pizza').children().hasClass(ingredient)) {
        $(`.btn.btn-${buttonIngredient}`).toggleClass('active');
    } 
}

// Check if ingredientos to update buttons

hasClass('pep', 'pepperonni');
hasClass('mushroom', 'mushrooms');
hasClass('green-pepper', 'green-peppers');


$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');



$('.btn.btn-pepperonni').on('click', function() {
    $('.pep').toggle();
    $('.panel li:contains("pepperonni")').toggle();
    $(`.btn.btn-pepperonni`).toggleClass('active');
    checkPizzaPrice();

})

$('.btn.btn-mushrooms').on('click', function() {

    $('.mushroom').toggle();
    $('.panel li:contains("mushrooms")').toggle();
    $(`.btn.btn-mushrooms`).toggleClass('active');
    checkPizzaPrice();

})

$('.btn.btn-green-peppers').on('click', function() {

    if (!$('#pizza').children().hasClass('green-pepper')) {
        console.log('no hay pepper!!');
        $('section:lt(21)').addClass('green-pepper');
    } else {
        $('.green-pepper').toggle();
        $('.panel li:contains("green")').toggle();
        checkPizzaPrice();

    }


    $(`.btn.btn-green-peppers`).toggleClass('active');
})

$('.btn.btn-sauce').on('click', function() {
    $('.sauce').toggleClass('sauce-white');
    $('.panel li:contains("white")').toggle();
    checkPizzaPrice();

   
})

$('.btn.btn-crust').on('click', function() {
    $('.crust').toggleClass('crust-gluten-free');
    $('.panel li:contains("gluten")').toggle();
    checkPizzaPrice();


})




})
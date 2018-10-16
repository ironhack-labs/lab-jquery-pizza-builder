// Write your Pizza Builder JavaScript in this file.


function updatePrice() {
    var basePrice = 10;
    if ($('.btn-pepperonni').hasClass('active')) {
        basePrice += 1;
    }
    if ($('.btn-mushrooms').hasClass('active')) {
        basePrice += 1;
    }
    if ($('.btn-green-peppers').hasClass('active')) {
        basePrice += 1;
    }
    if ($('.btn-crust').hasClass('active')) {
        basePrice += 5;
    }
    if ($('.btn-sauce').hasClass('active')) {
        basePrice += 3;
    }
    $('strong').text('$' + basePrice)
}

$('.btn-pepperonni').click(function(){
    console.log('Pepperonni button is clicked')
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $("li:contains(pepperonni)").toggle();
    updatePrice()
})

$('.btn-mushrooms').click(function(){
    console.log('mushroom button is clicked')
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $("li:contains(mushrooms)").toggle();
    updatePrice()
})

$('.btn-green-peppers').click(function(){
    console.log('green-pepper button is clicked')
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $("li:contains(green peppers)").toggle();
    updatePrice()
})

$('.crust').removeClass('crust-gluten-free')
$('.btn-crust').removeClass('active')
$("li:contains(gluten-free crust)").hide();
$('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free')
    $('.btn-crust').toggleClass('active')
    $("li:contains(gluten-free crust)").toggle();
    updatePrice()
})


$('.sauce').removeClass('sauce-white')
$('.btn-sauce').removeClass('active')
$("li:contains(white sauce)").hide();
$('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white')
    $('.btn-sauce').toggleClass('active')
    $("li:contains(white sauce)").toggle();
    updatePrice()
})

updatePrice();


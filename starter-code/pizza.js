// Write your Pizza Builder JavaScript in this file.

// Toggle Ingredients
$('.btn-pepperonni').click(function() {
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    let pepPrice = Number($('#price-pep > span').html());
    if($('.btn-pepperonni').hasClass('active')) {
        $('#price-pep').show();
        addToTotal(pepPrice);
    } else {
        $('#price-pep').hide();
        subtractFromTotal(pepPrice);
    }
})

$('.btn-mushrooms').click(function() {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    let mushroomPrice = Number($('#price-mushroom > span').html());
    if($('.btn-mushrooms').hasClass('active')) {
        $('#price-mushroom').show();
        addToTotal(mushroomPrice);
    } else {
        $('#price-mushroom').hide();
        subtractFromTotal(mushroomPrice);
    }    
})

$('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    let greenPepperPrice = Number($('#price-green-pepper > span').html());
    if($('.btn-green-peppers').hasClass('active')) {
        $('#price-green-pepper').show();
        addToTotal(greenPepperPrice);
    } else {
        $('#price-green-pepper').hide();
        subtractFromTotal(greenPepperPrice);
    }
})

$('.btn-crust').click(function() {
    $('.crust').toggleClass("crust-gluten-free");
    $('.btn-crust').toggleClass('active');
    let glutenFreePrice = Number($('#price-gluten-free > span').html());
    if($('.btn-crust').hasClass('active')) {
        $('#price-gluten-free').show();
        addToTotal(glutenFreePrice);
    } else {
        $('#price-gluten-free').hide();
        subtractFromTotal(glutenFreePrice);
    }
})

$('.btn-sauce').click(function() {
    $('.sauce').toggleClass("sauce-white");
    $('.btn-sauce').toggleClass('active');
    let whiteSaucePrice = Number($('#price-white-sauce > span').html());
    if($('.btn-sauce').hasClass('active')) {
        $('#price-white-sauce').show();
        addToTotal(whiteSaucePrice);
    } else {
        $('#price-white-sauce').hide();
        subtractFromTotal(whiteSaucePrice);
    }
})

function addToTotal(ingredientPrice) {
    let totalPrice = $('#total-price');
    let newTotalPrice = Number(totalPrice.html()) + ingredientPrice;
    totalPrice.html(newTotalPrice);
}

function subtractFromTotal(ingredientPrice) {
    let totalPrice = $('#total-price');
    let newTotalPrice = Number(totalPrice.html()) - ingredientPrice;
    totalPrice.html(newTotalPrice);
}
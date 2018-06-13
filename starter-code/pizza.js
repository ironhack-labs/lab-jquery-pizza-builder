// Write your Pizza Builder JavaScript in this file.
var glutenFreePrice = 5;
var pizzaPrice = 10;
var whiteSaucePrice = 3;
var greenPepperPrice = 1;
var mushroomsPrice = 1;
var pepperonniPrice = 1;
var totalPrice = 21;

$('.btn-pepperonni').click(function () {
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('.item1').toggle();
    if ($('.item1').is(':visible')) {
        return price(pepperonniPrice)
    } else {
        return price(-pepperonniPrice)
    }
})


$('.btn-mushrooms').click(function () {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.item2').toggle();
    if ($('.item2').is(':visible')) {
        return price(mushroomsPrice)
    } else {
        price(-mushroomsPrice)
    }
})

$('.btn-green-peppers').click(function () {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.item3').toggle();
    if ($('.item3').is(':visible')) {
        return price(greenPepperPrice)
    } else {
        return price(-greenPepperPrice)
    }
})

$('.btn-sauce').click(function () {
    $('.sauce').toggleClass('sauce-white');
    $('.item4').toggle()
    if ($('.item4').is(':visible')) {
        return price(whiteSaucePrice)
    } else {
        return price(-whiteSaucePrice)
    }
})

$('.btn-crust').click(function () {
    $('.crust').toggleClass('crust-gluten-free');
    $('.item5').toggle();
    if ($('.item5').is(':visible')) {
        return price(glutenFreePrice)
    } else {
        return price(-glutenFreePrice)
    }

})


$('.panel.price > ul > li').addClass(function (i) {
    return "food item" + (i + 1);
});

function price(p) {
     totalPrice = totalPrice + p ;
    return $('strong').text(`$ ${totalPrice}`);

}
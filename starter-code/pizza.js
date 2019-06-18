// Write your Pizza Builder JavaScript in this file.
let prices = {
    pepperonni: 1,
    mushrooms: 1,
    greenPeppers: 1,
    whiteSauce: 3,
    glutenFreeCrust: 5
}

let price = 21;

const totalPrice = $("#total-price");

$('.btn').click(function() {
    $(this).toggleClass("active");
})

$('.btn-pepperonni').click(function() {
    const pep = $('.pep').toggle();
    $('#panel-pepperonni').toggle(this);
    
    if(pep.is(":hidden")) {
        price -= prices.pepperonni;
        totalPrice.text(`$${price}`);
    } else {
        price += prices.pepperonni;
        totalPrice.text(`$${price}`);
    }
})

$('.btn-mushrooms').click(function() {
    const mush = $('.mushroom').toggle();
    $('#panel-mushroom').toggle(this);

    if(mush.is(":hidden")) {
        price -= prices.mushrooms;
        totalPrice.text(`$${price}`);
    } else {
        price += prices.mushrooms;
        totalPrice.text(`$${price}`);
    }
})

$('.btn-green-peppers').click(function() {
    const pepper = $('.green-pepper').toggle();
    $('#panel-pepper').toggle(this);

    if(pepper.is(":hidden")) {
        price -= prices.greenPeppers;
        totalPrice.text(`$${price}`);
    } else {
        price += prices.greenPeppers;
        totalPrice.text(`$${price}`);
    }
})

$('.btn-sauce').click(function() {
    const sauce = $('.sauce').toggleClass("sauce-white");
    $('#panel-sauce').toggle(this);

    if(!sauce.hasClass("sauce-white")) {
        price -= prices.whiteSauce;
        totalPrice.text(`$${price}`);
    } else {
        price += prices.whiteSauce;
        totalPrice.text(`$${price}`);
    }
})

$('.btn-crust').click(function() {
    const crust = $('.crust').toggleClass("crust-gluten-free");
    $('#panel-crust').toggle(this);
    
    if(!crust.hasClass("crust-gluten-free")) {
        price -= prices.glutenFreeCrust;
        totalPrice.text(`$${price}`);
    } else {
        price += prices.glutenFreeCrust;
        totalPrice.text(`$${price}`);
    }
})



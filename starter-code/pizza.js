// Write your Pizza Builder JavaScript in this file.

var pizzaObj = {
    basePizza: {
        price: 10,
        isActive: true
    },
    pepperonni: {
        price: 1,
        isActive: true
    },
    mushrooms: {
        price: 1,
        isActive: true
    },
    greenPeppers: {
        price: 1,
        isActive: true
    },
    whiteSauce: {
        price: 3,
        isActive: false
    },
    gfCrust: {
        price: 5,
        isActive: false
    }
};

var pepBtn = $('.btn-pepperonni');
var pep = $('.pep');
var pizza = $('#pizza');
var mushBtn = $('.btn-mushrooms');
var greenBtn = $('.btn-green-peppers');
var crustBtn = $('.btn-crust');
var crustSection = $('section.crust');
var sauceBtn = $('.btn-sauce');

$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');

// $('.list-whitesauce').css('display', 'none');
$('.list-whitesauce').css('display', 'none');
$('.list-gfcrust').css('display', 'none');

// $('.btn').removeClass('active');

pepBtn.click(function() {
    $('.pep').toggle();
    pepBtn.toggleClass('active');
    $('.list-pep').toggle('ul');
    if (pizzaObj.pepperonni.isActive) {
        pizzaObj.pepperonni.isActive = false;
    } else {
        pizzaObj.pepperonni.isActive = true;
    }
});

mushBtn.click(function() {
    $('.mushroom').toggle();
    mushBtn.toggleClass('active');
    $('.list-mush').toggle('ul');
    if (pizzaObj.mushrooms.isActive) {
        pizzaObj.mushrooms.isActive = false;
    } else {
        pizzaObj.mushrooms.isActive = true;
    }
});

greenBtn.click(function() {
    $('.green-pepper').toggle();
    greenBtn.toggleClass('active');
    $('.list-greenpep').toggle('ul');
    if (pizzaObj.greenPeppers.isActive) {
        pizzaObj.greenPeppers.isActive = false;
    } else {
        pizzaObj.greenPeppers.isActive = true;
    }
});

sauceBtn.click(function() {
    $('.sauce').toggleClass('sauce-white');
    sauceBtn.toggleClass('active');
    $('.list-whitesauce').toggle('ul');

    if (pizzaObj.whiteSauce.isActive) {
        pizzaObj.whiteSauce.isActive = false;
    } else {
        pizzaObj.whiteSauce.isActive = true;
    }
});

crustBtn.click(function() {
    $('.crust').toggleClass('crust-gluten-free');
    crustBtn.toggleClass('active');
    $('.list-gfcrust').toggle('ul');

    if (pizzaObj.gfCrust.isActive) {
        pizzaObj.gfCrust.isActive = false;
    } else {
        pizzaObj.gfCrust.isActive = true;
    }
});

function getTotalPrice(obj) {
    // var basePizza = 10;
    // var pepPrice = $('.list-pep')[0].innerHTML;
    // var parsedPep = parseInt(pepPrice[1]);
    // var mushPrice = $('.list-mush')[0].innerHTML;
    // var parsedmush = parseInt(mushPrice[1]);
    // var greenPrice = $('.list-greenpep')[0].innerHTML;
    // var saucePrice = $('.list-white')[0].innerHTML;
    // var gfPrice = $('.list-gfcrust')[0].innerHTML;
    // console.log(parsedmush);
}
getTotalPrice(pizzaObj);
//object.crust.active = !object.crust.active;

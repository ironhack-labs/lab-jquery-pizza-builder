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
    getTotalPrice(pizzaObj);
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
    getTotalPrice(pizzaObj);
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
    getTotalPrice(pizzaObj);
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
    getTotalPrice(pizzaObj);
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
    getTotalPrice(pizzaObj);
});

function getTotalPrice(obj) {
    var totalEl = document.querySelector('strong');
    var parsed = parseInt(totalEl.innerHTML[1] + totalEl.innerHTML[2]);
    var pizzaObjArr = Object.values(obj);

    var total = 0;
    pizzaObjArr.forEach(function(el) {
        if (el.isActive) {
            total += el.price;
            totalEl.innerHTML = '$' + String(total);
        }
    });
}
getTotalPrice(pizzaObj);

// Toppings
var greenPeppers = $('.green-pepper');
var greenPeppersButton = $(".btn-green-peppers");
var greenPeppersPrice = $(".green-peppers-price");

var pepperonni = $('.pep');
var pepperonniButton = $(".btn-pepperonni");
var pepperonniPrice = $(".pepperonni-price");

var mushrooms = $('.mushroom');
var mushroomsButton = $(".btn-mushrooms");
var mushroomsPrice = $(".mushrooms-price");

function togglePeppers(){
    greenPeppersButton.toggleClass("active");
    greenPeppers.toggle();
    greenPeppersPrice.toggle();
    calculateTotalPrice();
}

greenPeppersButton.click(function(){
    togglePeppers();
})

pepperonniButton.click(function(){
    pepperonniButton.toggleClass("active");
    pepperonni.toggle();
    pepperonniPrice.toggle();
    calculateTotalPrice();
})

mushroomsButton.click(function(){
    mushroomsButton.toggleClass("active");
    mushrooms.toggle();
    mushroomsPrice.toggle();
    calculateTotalPrice();
})

// Sauce and Crust
var sauce = $('.sauce');
var sauceButton = $('.btn-sauce');
var saucePrice = $(".sauce-price")

var crust = $('.crust');
var crustButton = $('.btn-crust');
var crustPrice = $('.crust-price');

function setDefaultSauceAndCrust (){
    sauceButton.removeClass("active");
    crustButton.removeClass("active");
    sauce.removeClass("sauce-white");
    crust.removeClass("crust-gluten-free");
    saucePrice.hide();
    crustPrice.hide();
}

setDefaultSauceAndCrust();

sauceButton.click(function(){
    sauceButton.toggleClass("active");
    sauce.toggleClass("sauce-white");
    saucePrice.toggle();
    calculateTotalPrice();
})

crustButton.click(function(){
    crustButton.toggleClass("active");
    crust.toggleClass("crust-gluten-free");
    crustPrice.toggle();
    calculateTotalPrice();
})

// Calculate and display price
var totalPriceDisplay = $('.price > strong');
var billItems = $('.price li');

function calculateTotalPrice(){
    var totalPrice = 10;
    for (var i=0; i<billItems.length; i++){
        if (billItems[i].style.display !== 'none'){
            totalPrice += parseInt(billItems[i].innerHTML.replace("$", ""));
        }
    }
    totalPriceDisplay.html("$" + totalPrice);
}

calculateTotalPrice();
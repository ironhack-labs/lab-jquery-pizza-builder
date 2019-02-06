// Write your Pizza Builder JavaScript in this file.

//Buttons
var pepperoniBtn = $("#pepperoni");
var mushroomsBtn = $("#mushrooms");
var peppersBtn = $("#peppers");
var sauceBtn = $("#sauce");
var crustBtn = $("#crust");
var priceSpan = $("#price");
var price = 13;

//Toppings
var pepperoni = $(".pep");
var mushrooms = $(".mushroom");
var peppers = $(".green-pepper")
var sauce = $(".sauce")
var crust = $(".crust")

//List of toppings
var pepperoniList = $('#price-pepperoni');
var mushroomsList = $('#price-mushrooms');
var peppersList = $('#price-pep');
var sauceList = $('#price-sauce');
var crustList = $('#price-crust');

//Price for toppings
var pepperoniPrice = 1;
var mushroomsPrice = 1;
var pepPrice = 1;
var saucePrice = 3;
var crustPrice = 5;

// Declaring that white sauce and gluten free crust is not checked from default
sauce.removeClass("regular-sauce");
sauceList.addClass('none');
crust.removeClass("crust-gluten-free");
crustList.addClass('none');

//Buttons functions for each topping
pepperoniBtn.click(function(){
    pepperoni.toggle('.inactive');
    pepperoniBtn.toggleClass('active');
    pepperoniBtn.toggleClass('inactive');
    pepperoniList.toggleClass('none');
    if(pepperoniBtn.hasClass('active')) {
        price += pepperoniPrice;
    } else if(pepperoniBtn.hasClass('inactive')) {
        price -= pepperoniPrice;
    }   
    priceSpan.html(price); 
});

mushroomsBtn.click(function(){
    mushrooms.toggle('.inactive');
    mushroomsBtn.toggleClass('active');
    mushroomsBtn.toggleClass('inactive');
    mushroomsList.toggleClass('none');
    if(mushroomsBtn.hasClass('active')) {
        price += mushroomsPrice;
    } else if(mushroomsBtn.hasClass('inactive')) {
        price -= mushroomsPrice;
    }   
    priceSpan.html(price); 
})

peppersBtn.click(function(){
    peppers.toggle('.inactive');
    peppersBtn.toggleClass('active');
    peppersBtn.toggleClass('inactive');
    peppersList.toggleClass('none');
    if(peppersBtn.hasClass('active')) {
        price += pepPrice;
    } else if(peppersBtn.hasClass('inactive')) {
        price -= pepPrice;
    }   
    priceSpan.html(price); 
})

sauceBtn.click(function(){
    sauce.toggleClass('sauce-white');
    sauceBtn.toggleClass('active');
    sauceBtn.toggleClass('inactive');
    sauceList.toggleClass('none');
    if(sauceBtn.hasClass('active')) {
        price += saucePrice;
    } else if(sauceBtn.hasClass('inactive')) {
        price -= saucePrice;
    }   
    priceSpan.html(price); 
})

crustBtn.click(function(){
    crust.toggleClass('crust-gluten-free');
    crustBtn.toggleClass('active');
    crustBtn.toggleClass('inactive');
    crustList.toggleClass('display');
    if(crustBtn.hasClass('active')) {
        price += crustPrice;
    } else if(crustBtn.hasClass('inactive')) {
        price -= crustPrice;
    }
    priceSpan.html(price);
})

//Printing the final price
priceSpan.html(price);
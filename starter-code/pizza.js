// Write your Pizza Builder JavaScript in this file.
var btns = $('.btn');
var pepperonniBtn = $('.btn-pepperonni');
var mushroomBtn = $('.btn-mushrooms');
var greenPepperBtn = $('.btn-green-peppers');
var whiteSauceBtn = $('.btn-sauce');
var glutenFreeBtn = $('.btn-crust');

var greenPeppers = $('.green-pepper');
var mushrooms = $('.mushroom');
var mushroomDiv = $('.mushroo')
var pepperonnis = $('.pep');
var crust = $('.crust');
var cheese = $('.cheese');
var sauce = $('.sauce');

function resetPizza(){
    crust.removeClass('crust-gluten-free');
    $('.price ul li:nth-child(5)').slideToggle();
    sauce.removeClass('sauce-white');
    $('.price ul li:nth-child(4)').slideToggle();
    
    glutenFreeBtn.removeClass("active");
    whiteSauceBtn.removeClass("active");
}

function calculatePrice(){
    var price = 10;
    
    if(greenPepperBtn.hasClass('active')){
        price += 1;
    }
    if(mushroomBtn.hasClass('active')){
        price += 1;
    }
    if(pepperonniBtn.hasClass('active')){
        price += 1;
    }
    if(whiteSauceBtn.hasClass('active')){
        price += 3;
    }
    if(glutenFreeBtn.hasClass('active')){
        price += 5;
    }

    $('.price strong').html("$"+price);
}

$(document).ready(() => {
    resetPizza();

    greenPepperBtn.click(()=>{
        greenPepperBtn.toggleClass('active');
        greenPeppers.fadeToggle()
        $('.price ul li:nth-child(3)').slideToggle();
        calculatePrice();
    });
    
    mushroomBtn.click(()=>{
        mushroomBtn.toggleClass('active');
        mushrooms.fadeToggle()
        $('.price ul li:nth-child(2)').slideToggle();
        calculatePrice();
    });
    
    pepperonniBtn.click(()=>{
        pepperonniBtn.toggleClass('active');
        pepperonnis.fadeToggle()
        $('.price ul li:nth-child(1)').slideToggle();
        calculatePrice();
    });
    
    whiteSauceBtn.click(()=>{
        whiteSauceBtn.toggleClass('active');
        sauce.toggleClass('sauce-white')
        $('.price ul li:nth-child(4)').slideToggle();
        calculatePrice();
    })
    
    glutenFreeBtn.click(()=>{
        glutenFreeBtn.toggleClass('active');
        crust.toggleClass('crust-gluten-free')
        $('.price ul li:nth-child(5)').slideToggle();
        calculatePrice();
    })

    calculatePrice();
});
// Write your Pizza Builder JavaScript in this file.

//Declare variables (more easy to follow)
var btnPepperonni = $(".btn-pepperonni");
var btnMushrooms = $(".btn-mushrooms");
var btnGreenPeppers = $(".btn-green-peppers");
var bntWhiteSauce = $(".btn-sauce");
var btnCrust = $(".btn-crust");

// Display
bntWhiteSauce.removeClass("active");
btnCrust.removeClass("active");
$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");
$(".panel ul li:contains('$5 gluten-free crust')").hide();
$(".panel ul li:contains('$3 white sauce')").hide();

//Functions
btnPepperonni.click(function() {
    btnPepperonni.toggleClass("active");
    $(".pep").toggle();
    $(".panel ul li:contains('$1 pepperonni')").toggle();
});
btnPepperonni.click(function(){});

btnMushrooms.click(function() {
    btnMushrooms.toggleClass("active");
    $(".mushroom").toggle();
    $(".panel ul li:contains('$1 mushrooms')").toggle();
});
btnMushrooms.click(function(){});

btnGreenPeppers.click(function() {
    btnGreenPeppers.toggleClass("active");
    $(".green-pepper").toggle();
    $(".panel ul li:contains('$1 green peppers')").toggle();
});
btnGreenPeppers.click(function(){});

bntWhiteSauce.click(function() {
    bntWhiteSauce.toggleClass("active");
    $(".sauce-white").toggle();
    $(".panel ul li:contains('$3 white sauce')").toggle();
});
bntWhiteSauce.click(function(){});

btnCrust.click(function() {
    btnCrust.toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".panel ul li:contains('$5 gluten-free crust')").toggle();
});
btnCrust.click(function(){});

//Prices
var pizzaPrice = 10;
if(btnPepperonni.hasClass("active")) {
    pizzaPrice +=1;
}
if (btnMushrooms.hasClass("active")) {
    pizzaPrice +=1;
}
if(btnGreenPeppers.hasClass("active")) {
    pizzaPrice +=1;
}
if(bntWhiteSauce.hasClass("active")) {
    pizzaPrice +=3;
}
if(btnGreenPeppers.hasClass("active")) {
    btnCrust +=5;
}

//UPDATE PRICE
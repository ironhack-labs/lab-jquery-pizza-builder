// Write your Pizza Builder JavaScript in this file.

var btnPepperonni = $(".btn-pepperonni");
var btnMushrooms = $(".btn-mushrooms");
var btnGreenPeppers = $(".btn-green-peppers");
var btnWhiteSauce = $(".btn-sauce");
var btnCrust = $(".btn-crust");



btnWhiteSauce.removeClass("active");
$( ".sauce" ).toggle();
$(".panel ul li:contains('$3 white sauce')").hide();
btnCrust.removeClass("active");
$(".crust").toggleClass("crust-gluten-free");
$(".panel ul li:contains('$5 gluten-free')").hide();



btnPepperonni.click(function() {
    btnPepperonni.toggleClass("active");
    $( ".pep" ).toggle();
    $(".panel ul li:contains('$1 pepperonni')").toggle();
});
btnPepperonni.click(function(){});

btnMushrooms.click(function() {
    btnMushrooms.toggleClass("active");
    $( ".mushroom" ).toggle();
    $(".panel ul li:contains('$1 mushrooms')").toggle();
});
btnMushrooms.click(function(){});

btnGreenPeppers.click(function() {
    btnGreenPeppers.toggleClass("active");
    $( ".green-pepper" ).toggle();
    $(".panel ul li:contains('$1 green peppers')").toggle();
});
btnGreenPeppers.click(function(){});

btnWhiteSauce.click(function() {
    btnWhiteSauce.toggleClass("active");
    $( ".sauce" ).toggle();
    $(".panel ul li:contains('$3 white sauce')").toggle();
});
btnWhiteSauce.click(function(){});
   
btnCrust.click(function() {
    btnCrust.toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".panel ul li:contains('$5 gluten-free')").toggle();
});
btnCrust.click(function(){});





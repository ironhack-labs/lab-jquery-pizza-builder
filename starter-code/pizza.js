// Write your Pizza Builder JavaScript in this file.
// console.log($("#pizza"));

var pepperoniButton = $(".btn-pepperonni");
var mushroomsButton = $(".btn-mushrooms");
var greenPeppersButton = $(".btn-green-peppers");
var sauceButton = $('.btn-sauce');
var glutenButton = $('.btn-crust');
var pizza = $("#pizza");
var pepperoni = $(".pep");
var mushroom = $(".mushroom");
var peppers = $(".green-pepper");
var sauce = $('.sauce-white');
var gluten = $('.crust-gluten-free');

sauce.removeClass('.sauce-white');
gluten.removeClass('.crust-gluten-free');

// function checkTopping(element){
//     if (element.css("display", "block");
// }

function checkActive(element) {
    if (element.hasClass("active")) element.removeClass("active") ;
};
checkActive(pepperoniButton);

pepperoniButton.click(function() {
    pepperoni.toggle();
})

mushroomsButton.click(function() {
    mushroom.toggle();
})

greenPeppersButton.click(function() {
    peppers.toggle();
})

sauceButton.click(function() {
    sauce.toggleClass();
})


glutenButton.click(function(){
    gluten.toggleClass()
})




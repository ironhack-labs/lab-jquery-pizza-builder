// Write your Pizza Builder JavaScript in this file.

function clickIngrendient(buttonName, ingredientName){
    pizzaPrice = parseFloat(( $("strong").text() ).replace('$', '')) || 0;

    if ( $(buttonName).hasClass("active") ) {
        $(buttonName).removeClass("active");
        $(ingredientName).hide();
        pizzaPrice -=3;
        $("strong").text("$" + pizzaPrice);
    }
    else {
        $(buttonName).addClass("active");
        $(ingredientName).show();
        pizzaPrice +=3;
        $("strong").text("$" + pizzaPrice);
    }
}




$(function(){

    $(".btn-pepperonni").click(function(){
        clickIngrendient(this, ".pep")
    });

    $(".btn-mushrooms").click(function(){
        clickIngrendient(".btn-mushrooms", ".mushroom")
    });

    $(".btn-green-peppers").click(function(){
        clickIngrendient(".btn-green-peppers", ".green-pepper")
    });

    $(".btn-sauce").click(function(){
        clickIngrendient(".btn-sauce", ".sauce")
    });

    $(".btn-crust").click(function(){
        clickIngrendient(".btn-crust", ".crust")
    });





})
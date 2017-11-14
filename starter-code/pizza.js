// Write your Pizza Builder JavaScript in this file.

function clickIngrendient(buttonName, ingredientName){
    if ( $(buttonName).hasClass("active") ) {
        $(buttonName).removeClass("active");
        $(ingredientName).hide();
    }
    else {
        $(buttonName).addClass("active");
        $(ingredientName).show();
    }
}


$(function(){

    
    $(".btn-pepperonni").click(function(){
        clickIngrendient(".btn-pepperonni", ".pep")
    });


    $("button.btn-mushrooms").click(function(){
        clickIngrendient(".btn-mushrooms", ".mushroom")
    });







})
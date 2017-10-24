// Write your Pizza Builder JavaScript in this file.
var $greenPepper = $(".green-pepper");
var $greenPepperActivation = $(".btn-green-peppers");

var $pepperoni = $(".pep");
var $pepperoniActivation = $(".btn-pepperonni");

var $mushroom = $(".mushroom");
var $mushroonActivation = $(".btn-mushrooms");

var $glutenFree = $(".crust-gluten-free");
var $glutenFreeActivation = $(".btn-crust");

var $whiteSauce = $(".sauce-white");
var $whiteSauceActivation = $(".btn-sauce");

var $listItems = $("aside li");

function main(){
    //set the default style for the pizza
    setDefault();
    
    //run the event listeners for all buttons
    setListeners();
}



function setDefault(){
    //toppings
    $glutenFree.toggleClass("crust-gluten-free");
    $whiteSauce.toggleClass("sauce-white");
    //buttons
    $glutenFreeActivation.toggleClass("active");
    $whiteSauceActivation.toggleClass("active");
    //pricelist
    $listItems.filter(":contains('$3 white sauce')").toggle();
    $listItems.filter(":contains('$5 gluten-free crust')").toggle();
}

function setListeners(){
    $(".btn-green-peppers").click(function(){
        $greenPepper.toggle();
        $greenPepperActivation.toggleClass("active");
        $listItems.filter(":contains('$1 green peppers')").toggle();
    });

    $(".btn-pepperonni").click(function(){
        $pepperoni.toggle();
        $pepperoniActivation.toggleClass("active");
        $listItems.filter(":contains('$1 pepperonni')").toggle();
    });

    $(".btn-mushrooms").click(function(){
        $mushroom.toggle();
        $mushroonActivation.toggleClass("active");
        $listItems.filter(":contains('$1 mushrooms')").toggle();
    });

    $(".btn-crust").click(function(){
        $glutenFree.toggleClass("crust-gluten-free");
        $glutenFreeActivation.toggleClass("active");
        $listItems.filter(":contains('$5 gluten-free crust')").toggle();
    });

    $(".btn-sauce").click(function(){
        $whiteSauce.toggleClass("sauce-white");
        $whiteSauceActivation.toggleClass("active");
        $listItems.filter(":contains('$3 white sauce')").toggle();
    });
}


$(document).ready(main)

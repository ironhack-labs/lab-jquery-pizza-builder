// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    //Pepperonni
    $(".btn-pepperonni").on("click", function(){
        pepperonni();
        toggleButton(".btn-pepperonni")
    });
    //Mushrooms
    $(".btn-mushrooms").on("click", function(){
       mushrooms();
       toggleButton(".btn-mushrooms")
    });
    //Green-pepper
    $(".btn-green-peppers").on("click", function(){
        greenPepper();
        toggleButton(".btn-green-peppers")
    });

    //Add and remove toppings
    function pepperonni(){
        $(".pep").fadeToggle(200);
    }

    function mushrooms(){
        $(".mushroom").fadeToggle(200);
    }

    function greenPepper(){
        $(".green-pepper").fadeToggle(200);
    }


    //Sauce and crust options
    function crustGluten(){
        $(".crust").toggleClass("crust-gluten-free");
    }
    function sauceWhite(){
        $(".sauce").toggleClass("sauce-white");
    }

    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");

    $(".btn-crust").on("click", function(){
        crustGluten();
        toggleButton(".btn-crust");
    });

    $(".btn-sauce").on("click", function(){
        sauceWhite();
        toggleButton(".btn-sauce");
    });
    

    //Change the button's state
    function toggleButton(receivedClass){
        $(receivedClass).toggleClass("active");
    }

    //Ingredients and prices
    $(".panel.price > ul").hide("li");

});
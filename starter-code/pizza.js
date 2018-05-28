// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    
    var totalPrice = 0;
    var greenPepperPrice = Number($( 'li:contains("$1 green peppers")').text()[1]);
    var mushroomPrice = Number($('li:contains("$1 mushrooms")').text()[1]);
    var pepPrice = Number($('li:contains("$1 pepperonni")').text()[1]);


    var getGreenPepperPrice = function(totalPrice, greenPepperPrice) {
            totalPrice += greenPepperPrice * (-1);
    }

    var getMushroomPrice = function(totalPrice, mushroomPrice) {
        totalPrice += mushroomPrice * (-1);
         
    }

    var getPepPrice = function(totalPrice, pepPrice) {
        totalPrice += pepPrice * (-1);
    }

    $(".btn-green-peppers").click(function(event, totalPrice, greenPepperPrice) {
        $(".green-pepper").toggleClass("hidden");
        $(".btn-green-peppers").toggleClass("active");
        $( 'li:contains("$1 green peppers")').toggleClass("hidden");
        getGreenPepperPrice(totalPrice, greenPepperPrice);
    });

    $(".btn-mushrooms").click(function(event) {
        $(".mushroom").toggleClass("hidden");
        $(".btn-mushrooms").toggleClass("active");
        $( 'li:contains("$1 mushrooms")').toggleClass("hidden");
        getMushroomPrice();
    });

    $(".btn-pepperonni").click(function(event) {
        $(".pep").toggleClass("hidden");
        $(".btn-pepperonni").toggleClass("active");
        $( 'li:contains("$1 pepperonni")').toggleClass("hidden");
        getPepPrice();
    });

    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $( 'li:contains("$5 gluten-free crust")').addClass("hidden");

    $(".btn-crust").click(function(event) {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $( 'li:contains("$5 gluten-free crust")').toggleClass("hidden");
    });

    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $( 'li:contains("$3 white sauce")').addClass("hidden");

    $(".btn-sauce").click(function(event) {
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $( 'li:contains("$3 white sauce")').toggleClass("hidden");
    });

        //seguir por aquí
    // var getTotalPrice = function() {
    //     var totalPrice = 0;
    //     totalPrice =  getGreenPepperPrice() + getMushroomPrice() + getPepPrice();
        
    // }
        $(".price strong").text("$" + totalPrice);





    
  


    

});



// Write your Pizza Builder JavaScript in this file.
//alert("pizza js is connected!!");
$(document).ready(function(){

    //Default price
    var mushroomPrice = 1;
    var pepperonniPrice = 1;
    var greenPepperPrice = 1;

    var saurcePrice = 3;
    var crustPrice = 5;

    //Buttons
    $(".btn-pepperonni").click(function(){
        $(".pep").toggle(".pep");
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
                pepperonniPrice = 1;
            } else {
                pepperonniPrice = 0;
            };
        $(".price li:contains('pepperonni')").toggle();
    });


    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggle("cap");
        $(".mushroom").toggle("stem");
        $(this).toggleClass("active");
        if($(".btn-mushrooms").hasClass("active")) {
            mushroomPrice = 1;
        } else {
            mushroomPrice = 0;
        }
        $(".price li:contains('mushrooms')").toggle();
    });

    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggle(".green-pepper");
        $(this).toggleClass("active");
        if($(".btn-green-peppers").hasClass("active")) {
            greenPepperPrice = 1;
        } else {
            greenPepperPrice = 0;
        }
        $(".price li:contains('green peppers')").toggle();
    });


    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(this).toggleClass("active");
        if($(".btn-sauce").hasClass("active")) {
            $(".price li:contains('white sauce')").toggle();
            saurcePrice = 3;
        } else {
            saurcePrice = 0;
        };
    });

    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $(this).toggleClass("active");
        if($(".btn-crust").hasClass("active")) {
            $(".price li:contains('white sauce')").toggle();
            crustPrice = 5;
        } else {
            crustPrice = 0;
        };
    })

    //Price

    $(".btn").click(function(){
        var basePrice = 10;
        var totalPrice = basePrice + mushroomPrice + pepperonniPrice + greenPepperPrice + saurcePrice + crustPrice;
        //console.log("End price is"+ totalPrice);
        $(".price strong").text("$ "+ totalPrice.toString());
    })


    $(".price li:contains('sauce')").hide();
    $(".price li:contains('crust')").hide();
}); //End of ready

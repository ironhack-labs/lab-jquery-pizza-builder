// Write your Pizza Builder JavaScript in this file.
$("document").ready(function () {

    // make crust and red sauce default on load
    $(".crust").removeClass("crust-gluten-free");

    $(".sauce").removeClass("sauce-white");

    //setting default price on load
    $(".total").html("13");
    
    


    // "if the ingredient is turned on, its button should have active."
    //removing active class so it will appear again on click. 

    $(".btn-green-peppers").removeClass("active");

    $(".btn-mushrooms").removeClass("active");

    $(".btn-pepperonni").removeClass("active");

    $(".btn-sauce").removeClass("active");

    $(".btn-crust").removeClass("active");

    //remove white sauce and gluten free from price list on load
    $("#li-5").addClass("hidden") //crust
    $("#li-4").addClass("hidden") //sauce



    //adding/removing ingredientes by adding the class hidden
    //adding/removing class active  
    $(".btn-green-peppers").click(function () {
        $(".green-pepper").toggleClass("hidden");
        $(".btn-green-peppers").toggleClass("active");
        $("#li-3").toggleClass("hidden");
    });


    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggleClass("hidden");
        $(".btn-mushrooms").toggleClass("active");
        $("#li-2").toggleClass("hidden");
    });

    $(".btn-pepperonni").click(function () {
        $(".pep").toggleClass("hidden");
        $(".btn-pepperonni").toggleClass("active");
        $("#li-1").toggleClass("hidden");
    });

    $(".btn-sauce").click(function () {
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $("#li-4").toggleClass("hidden");


    });

    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $("#li-5").toggleClass("hidden");
        $(function(){
            var total = $(".total").parseFloat("14");
            return total;
        })
            

        
        
    


    });

});



// var currentValue = $("strong").slice(1);
// var productValue = $("#li-5").slice(1, 3);
// var subtotal = currentValue + productValue;
// $(strong).html("$" + subtotal)

// //make pizza look empty on load - cancelled
// $(".green-pepper").addClass("hidden");

// $(".mushroom").addClass("hidden");

// $(".pep").addClass("hidden");
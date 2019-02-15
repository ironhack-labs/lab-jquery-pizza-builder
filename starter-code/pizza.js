// Write your Pizza Builder JavaScript in this file.
$("document").ready(function () {

    // make crust and red sauce default on load
    $(".crust").removeClass("crust-gluten-free");

    $(".sauce").removeClass("sauce-white");

    //setting default price on load
    $(".total").html("13");




    // "if the ingredient is turned on, its button should have active."
    //removing active class so it will appear again on click. 

    // $(".btn-green-peppers").removeClass("active");

    // $(".btn-mushrooms").removeClass("active");

    // $(".btn-pepperonni").removeClass("active");

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
        var className = $(this).attr('class')

        var total = $(".total").html();

        if (className === "btn btn-green-peppers active") {
            $(".total").html(parseFloat(total) + 1);

        } else {
            $(".total").html(parseFloat(total) - 1);
        }

    });


    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggleClass("hidden");
        $(".btn-mushrooms").toggleClass("active");
        $("#li-2").toggleClass("hidden");
        var className = $(this).attr('class')

        var total = $(".total").html();

        if (className === "btn btn-mushrooms active") {
            $(".total").html(parseFloat(total) + 1);

        } else {
            $(".total").html(parseFloat(total) - 1);
        }

    });

    $(".btn-pepperonni").click(function () {
        $(".pep").toggleClass("hidden");
        $(".btn-pepperonni").toggleClass("active");
        $("#li-1").toggleClass("hidden");

        var className = $(this).attr('class')

        var total = $(".total").html();

        if (className === "btn btn-pepperonni active") {
            $(".total").html(parseFloat(total) + 1);

        } else {
            $(".total").html(parseFloat(total) - 1);
        }
    });

    $(".btn-sauce").click(function () {
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $("#li-4").toggleClass("hidden");
        //var className stores all class values of sauce 
        var className = $(this).attr('class')

        //var total contains the initial total price before click
        var total = $(".total").html();

        if (className === "btn btn-sauce active") {
            $(".total").html(parseFloat(total) + 3);

        } else {
            $(".total").html(parseFloat(total) - 3);
        }

    });

    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $("#li-5").toggleClass("hidden");

        //var className contains the complete class value 
        var className = $(this).attr('class')

        //var total contains the initial total price before click
        var total = $(".total").html();

        //In case the button has active in his class (which means pressed), i need to add +5 to the price 
        if (className === "btn btn-crust active") {
            $(".total").html(parseFloat(total) + 5);
            //In case the button crust does not have active in the class (which means unpressed) i need to extract -5 from the price.
        } else {
            $(".total").html(parseFloat(total) - 5);
        }


    });

});



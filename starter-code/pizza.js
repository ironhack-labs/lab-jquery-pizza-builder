// Write your Pizza Builder JavaScript in this file.

$( document ).ready(function() {

    $("aside.panel li:nth-child(4)").hide();
    $("aside.panel li:nth-child(5)").hide();

    $(".btn-sauce").removeClass("active");
    $(".btn-crust").removeClass("active");


    $(".btn-pepperonni").click(function() {
        $(".pep").toggle();
        $(this).toggleClass("active");

        if ($(".btn-pepperonni").hasClass("active")) {
            $("aside.panel li:nth-child(1)").show();
        } else {
            $("aside.panel li:nth-child(1)").hide();
        }

    });

    $(".btn-mushrooms").click(function() {
        $(".mushroom").toggle();
        $(this).toggleClass("active");

        if ($(".btn-mushrooms").hasClass("active")) {
            $("aside.panel li:nth-child(2)").show();
        } else {
            $("aside.panel li:nth-child(2)").hide();
        }

    });

    $(".btn-green-peppers").click(function() {
        $(".green-pepper").toggle();
        $(this).toggleClass("active");

        if ($(".btn-green-peppers").hasClass("active")) {
            $("aside.panel li:nth-child(3)").show();
        } else {
            $("aside.panel li:nth-child(3)").hide();
        }
        
    });
    
    $(".sauce").removeClass("sauce-white");
    $(".crust").removeClass("crust-gluten-free");

    $(".btn-sauce").click(function() {
        $(".sauce").toggleClass("sauce-white");
        $(this).toggleClass("active");

        if ($(".btn-sauce").hasClass("active")) {
            $("aside.panel li:nth-child(4)").show();
        } else {
            $("aside.panel li:nth-child(4)").hide();
        }

    $(".btn-crust").click(function() {
        $(".crust").toggleClass("crust-gluten-free");
        $(this).toggleClass("active");

        if ($(".btn-crust").hasClass("active")) {
            $("aside.panel li:nth-child(5)").show();
        } else {
            $("aside.panel li:nth-child(5)").hide();
        }

    });

    
    });


});

function extractPrice(ob) {
    
}
// Write your Pizza Builder JavaScript in this file.

// Write your Pizza Builder JavaScript in this file.


$(document).ready(function () {

    $(".btn-pepperoni").data("price", 1);
    $(".btn-mushrooms").data("price", 1);
    $(".btn-green-peppers").data("price", 1);
    $(".btn-sauce").data("price", 3);
    $(".btn-crust").data("price", 5);

    function calculateTotalPrice() {

        var daBtns = $(".btn");
        var price = 10;

        for (var i = 0; i < daBtns.length; i++) {
            if (daBtns.eq(i).hasClass("active")) {
                price += daBtns.eq(i).data("price");
            }
        }
    
        $("strong").text("$" + price);
    }


    $('.btn').click(function () {
        $(this).toggleClass('active');
        calculateTotalPrice();
    });


    $(".pep").hide();
    $(".mushroom").hide();
    $(".green-pepper").hide();
    $(".sauce").removeClass("sauce-white");
    $(".crust").removeClass("crust-gluten-free");
    $(".price li").hide();

    $(".btn-pepperonni").click(function () {
        $(".pep").toggle();
        $("li:contains(pepperonni)").toggle();
        // $(".btn-pepperonni").toggleClass("active");
    
    });

    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggle();
        $("li:contains(mushroom)").toggle();
        // $(".btn-mushrooms").toggleClass("active");
    });

    $(".btn-green-peppers").click(function () {
        $(".green-pepper").toggle();
        $("li:contains(green pepper)").toggle();
        // $(".btn-green-peppers").toggleClass("active");
    });

    $(".btn-sauce").click(function () {
        $(".sauce").toggleClass("sauce-white");
        $("li:contains(white sauce)").toggle();
        // $(".btn-sauce").toggleClass("active");
    });

    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
        $("li:contains(gluten)").toggle();
        // $(".btn-crust").toggleClass("active");
    });


   
    
   
});
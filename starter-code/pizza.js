// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    $(".btn-pepperonni").click(function(){
        $(".pep").toggle();
        $(this).toggleClass("active");
        $(".panel.price ul li:first").toggle();

        if ($(this).hasClass("active")) {
            calculatePrice(1);
        } else {
            calculatePrice(-1);
        }
    });

    $(".btn-mushrooms").click(function(){
            $(".mushroom").toggle();
            $(this).toggleClass("active");
            $(".panel.price ul li:nth-child(2)").toggle();
            if ($(this).hasClass("active")) {
                calculatePrice(1);
            } else {
                calculatePrice(-1);
            }
        });

    $(".btn-green-peppers").click(function(){
            $(".green-pepper").toggle();
            $(this).toggleClass("active");
            $(".panel.price ul li:nth-child(3)").toggle();
            if ($(this).hasClass("active")) {
                calculatePrice(1);
            } else {
                calculatePrice(-1);
            }
        });

    $(".btn-sauce").click(function(){
        $(".sauce").toggle();
        $(this).toggleClass("active");
        $(".panel.price ul li:nth-child(4)").toggle();
        if ($(this).hasClass("active")) {
            calculatePrice(3);
        } else {
            calculatePrice(-3);
        }
    });

    $(".btn-crust").click(function(){
        $(".cheese").toggle();
        $(this).toggleClass("active");
        $(".panel.price ul li:nth-child(5)").toggle();
        if ($(this).hasClass("active")) {
            calculatePrice(5);
        } else {
            calculatePrice(-5);
        }
    });


});

var total = 21;

function calculatePrice(ingredientPrice) {
    total += ingredientPrice;
    $(".price strong").text("$" + total)
}
$(document).ready(function () {
    // Write your Pizza Builder JavaScript in this file.

    // Iteration 1: Add and remove toppings
    $('.btn-pepperonni').click(function() {
        $(this).toggleClass('active');
        $('.pep').toggle();
        $('aside li').filter(":contains('$1 pepperonni')").toggle();
        printOutPrice();
    });
    $('.btn-mushrooms').click(function() {
        $(this).toggleClass('active');
        $('.mushroom').toggle();
        $('aside li').filter(":contains('$1 mushrooms')").toggle();
        printOutPrice();
    });
    $('.btn-green-peppers').click(function() {
        $(this).toggleClass('active');
        $('.green-pepper').toggle();
        $('aside li').filter(":contains('$1 green peppers')").toggle();
        printOutPrice();
    });
    $('.btn-crust').click(function() {
        $(this).toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free')
        $('aside li').filter(":contains('$5 gluten-free crust')").toggle();
        printOutPrice();
    });
    $('.btn-sauce').click(function() {
        $(this).toggleClass('active');
        $('.sauce').toggleClass('sauce-white');
        $('aside li').filter(":contains('$3 white sauce')").toggle();
        printOutPrice();
    });

    // Iteration 2: Sauce and crust options
    $('.crust').removeClass('crust-gluten-free');
    $('aside li').filter(":contains('$5 gluten-free crust')").hide();

    $('.sauce').removeClass('sauce-white');
    $('aside li').filter(":contains('$3 white sauce')").hide();  

    // Iteration 3: Change the buttons' state
    $('.btn-sauce').removeClass('active');
    $('.btn-crust').removeClass('active');
    // added $(this).toggleClass('active'); in all
    // click functions

    // Iteration 4: Ingredients and prices

    // Iteration 5: Update price
    function calculateTotalPrice() {
        var totalPrice = 10
        $('aside li:visible').each(function(index, li) {
            totalPrice += parseFloat($(li).text()[1]);
        });
        return totalPrice;
    }

    function printOutPrice() {
        $('aside strong').html('$' +calculateTotalPrice());
    }
    printOutPrice()
});


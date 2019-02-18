// Write your Pizza Builder JavaScript in this file.
$('document').ready(function () {
    
    // array to calc final pizza price
    var pizzaTotalPrice = [{ type: '', price: 0 }];

    // create object containing base pizza price

    pizzaTotalPrice.push({
        type: "basePizza",
        price: 10
    });

    pizzaTotalPrice.push({
        type: "pepperonniTopping",
        price: 1
    });

    pizzaTotalPrice.push({
        type: "mushroomTopping",
        price: 1
    });

    pizzaTotalPrice.push({
        type: "greenPepperTopping",
        price: 1
    });

    // Total value Calculation

    var pizzaTotal = pizzaTotalPrice.reduce((a, b) => ({ price: a.price + b.price }));
    $("#total").text("$" + pizzaTotal.price);

    // Pepperoni topping button

    $('.btn-pepperonni').click(function () {
        $('.pep').toggle()
        if ($('.btn-pepperonni').hasClass("active")) {
            $('.price li').eq(0).show();

            pizzaTotalPrice.push({
                type: "pepperonniTopping",
                price: 1
            })

        }
        else {
            $('.price li').eq(0).hide();
            pizzaTotalPrice.splice(pizzaTotalPrice.map(function (e) { return e.type; }).indexOf('pepperonniTopping'), 1);
        }
    });

    // Mushroom topping button

    $('.btn-mushrooms').click(function () {
        $('.mushroom').toggle()
        if ($('.btn-mushrooms').hasClass("active")) {
            $('.price li').eq(1).show();

            pizzaTotalPrice.push({
                type: "mushroomTopping",
                price: 1
            })
        }
        else {
            $('.price li').eq(1).hide();
            pizzaTotalPrice.splice(pizzaTotalPrice.map(function (e) { return e.type; }).indexOf('mushroomTopping'), 1);
        }
    });

    // Green Pepper topping button

    $('.btn-green-peppers').click(function () {
        $('.green-pepper').toggle()
        if ($('.btn-green-peppers').hasClass("active")) {
            $('.price li').eq(2).show();
            pizzaTotalPrice.push({
                type: "greenPepperTopping",
                price: 1
            })
        }
        else {
            $('.price li').eq(2).hide();
            pizzaTotalPrice.splice(pizzaTotalPrice.map(function (e) { return e.type; }).indexOf('greenPepperTopping'), 1);
        }
    });

    // White Sauce topping button

    $('.btn-sauce').click(function () {
        $('.sauce').toggleClass("sauce-white")
        if ($('.btn-sauce').hasClass("active")) {

            $('.price li').eq(3).show();
            pizzaTotalPrice.push({
                type: "whiteSauceTopping",
                price: 3
            })
        }
        else {
            $('.price li').eq(3).hide();
            pizzaTotalPrice.splice(pizzaTotalPrice.map(function (e) { return e.type; }).indexOf('whiteSauceTopping'), 1);
        }
    });

    // Gluten Free Crust button
    $('.btn-crust').click(function () {
        $('.crust-gluten-free').toggleClass("crust")
        if ($('.btn-crust').hasClass("active")) {

            $('.price li').eq(4).show();
            pizzaTotalPrice.push({
                type: "GlutenFreeCrust",
                price: 5
            })
        }
        else {
            $('.price li').eq(4).hide();
            pizzaTotalPrice.splice(pizzaTotalPrice.map(function (e) { return e.type; }).indexOf('GlutenFreeCrust'), 1);
        }
    });

    //Total Price Calculation

    $(".btn").on("click", function () {
        $(this).toggleClass("active");

        var pizzaTotal = pizzaTotalPrice.reduce((a, b) => ({ price: a.price + b.price }));
        $("#total").text("$" + pizzaTotal.price);
    });

}); 

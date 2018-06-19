// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    var greenPepper = $(".green-pepper");
    var mushroom = $(".mushroom");
    var pepperoni = $(".pep");
    $(".btn").removeClass("active");
    greenPepper.hide();
    mushroom.hide();
    pepperoni.hide();
    var ul = $(".price ul");
    ul.find("li").hide();
    var pre = 10;
    displayPrice("0");
    //añadir/quitar toppings
    $(".btn-pepperonni").click(function () {
        $(this).toggleClass("active");
        if ($(".pep:hidden").length > 0) {
            pepperoni.show();
            ul.find("li:nth-child(1)").show();
            displayPrice(1);
        } else {
            pepperoni.hide();
            ul.find("li:nth-child(1)").hide();
            displayPrice(-1);
        }
    });
    $(".btn-mushrooms").click(function () {
        $(this).toggleClass("active");
        if ($(".mushroom:hidden").length > 0) {
            mushroom.show();
            ul.find("li:nth-child(2)").show();
            displayPrice(1);
        } else {
            mushroom.hide();
            ul.find("li:nth-child(2)").hide();
            displayPrice(-1);
        }
    });
    $(".btn-green-peppers").click(function () {
        $(this).toggleClass("active");
        if ($(".green-pepper:hidden").length > 0) {
            greenPepper.show();
            ul.find("li:nth-child(3)").show();
            displayPrice(1);
        } else {
            greenPepper.hide();
            ul.find("li:nth-child(3)").hide();
            displayPrice(-1);
        }
    });
    //quitar salsas
    var crust = $(".crust");
    var sauce = $(".sauce");
    crust.removeClass("crust-gluten-free");
    sauce.removeClass("sauce-white");

    //botones toppings
    $(".btn-sauce").click(function () {
        $(this).toggleClass("active");
        sauce.toggleClass("sauce-white");
        ul.find("li:nth-child(4)").toggle();
        if($(this).hasClass("active")){
            displayPrice(3);
        }else{
            displayPrice(-3);
        }
        
    });
    $(".btn-crust").click(function () {
        $(this).toggleClass("active");
        crust.toggleClass("crust-gluten-free");
        ul.find("li:nth-child(5)").toggle();
        if($(this).hasClass("active")){
            displayPrice(5);
        }else{
            displayPrice(-5);
        }
    });

    function displayPrice(ingredientPrice) {
        pre += parseInt(ingredientPrice);
        $("strong").text("$" + pre);
    }


});

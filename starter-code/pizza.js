var price_pepperoni = 1;
var price_mushroom = 1;
var price_green_peppers = 1;
var white_sauce = 3;
var price_total = 10;

$(document).ready(function () {

    $(".price-green-peppers").hide();
    $(".price-mushrooms").hide();
    $(".price-pepperoni").hide();
    $(".price-white-sauce").hide();
    $(".price-glutenfree-crust").hide();

    $(".btn-green-peppers").click(function () {
        $(".green-pepper").toggleClass("visible");
        $(".btn-green-peppers").toggleClass("active");
        $(".price-green-peppers").slideToggle("fast");
    })
    $(".btn-mushrooms").click(function () {
        $(".mushroom").toggleClass("visible");
        $(".btn-mushrooms").toggleClass("active");
        $(".price-mushrooms").slideToggle("fast");
    })
    $(".btn-pepperonni").click(function () {
        $(".pep").toggleClass("visible");
        $(".btn-pepperonni").toggleClass("active");
        $(".price-pepperoni").slideToggle("fast");
    })
    $(".btn-sauce").click(function () {
        $(".sauce-white").toggleClass("visible");
        $(".btn-sauce").toggleClass("active");
        $(".price-white-sauce").slideToggle("fast");
    })
    $(".btn-crust").click(function () {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $(".price-glutenfree-crust").slideToggle("fast");
    })
})



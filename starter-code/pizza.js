// Write your Pizza Builder JavaScript in this file
$(".btn-pepperonni").click(function() {
    $(".pep").toggle("true");
    $(".btn-pepperonni").toggleClass("active");
    } );
$(".panel price:contains('$1 pepperonni')").remove();

$(".btn-mushrooms").click(function() {
    $(".mushroom").toggle("true");
    $(".btn-mushrooms").toggleClass("active");
} );

$(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle("true");
    $(".btn-green-peppers").toggleClass("active");
} );

// By default, regular crust
$('.crust-gluten-free').removeClass("crust-gluten-free");
$('.btn-crust').click(function() {
    $('.btn-crust').toggleClass("active");
    $('.crust').toggleClass("crust-gluten-free");
});

$('.sauce-white').removeClass("sauce-white");
$('.btn-sauce').click(function() {
    $('.btn-sauce').toggleClass("active");
    $('.sauce').toggleClass("sauce-white");
});


//Use JavaScript to hide and show the items by default




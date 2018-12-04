// Write your Pizza Builder JavaScript in this file
$(".btn-pepperonni").click(function() {
    $(".pep").toggle("true");
    $(".btn-pepperonni").toggleClass("active");
    $('.panel.price li:contains("pepperonni")').toggle()
    } );

$(".btn-mushrooms").click(function() {
    $(".mushroom").toggle("true");
    $(".btn-mushrooms").toggleClass("active");
    $('.panel.price li:contains("mushrooms")').toggle()
} );

$(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle("true");
    $(".btn-green-peppers").toggleClass("active");
    $('.panel.price li:contains("green")').toggle()
} );

// By default, regular crust
$('.crust-gluten-free').removeClass("crust-gluten-free");
$('.btn-crust').click(function() {
    $('.btn-crust').toggleClass("active");
    $('.crust').toggleClass("crust-gluten-free");
    $('.panel.price li:contains("gluten")').toggle()
});

$('.sauce-white').removeClass("sauce-white");
$('.btn-sauce').click(function() {
    $('.btn-sauce').toggleClass("active");
    $('.sauce').toggleClass("sauce-white");
    $('.panel.price li:contains("sauce")').toggle()
});


//Use JavaScript to hide and show the items by default




// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').click(function() {
    $('.pep').toggle("true");
    $('.btn-pepperonni').toggleClass("active");
});




$('.btn-mushrooms').click(function() {
    $('.mushroom').toggle("true");
    $('.btn-mushrooms').toggleClass("active");
});

$('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle("true");
    $('.btn-green-peppers').toggleClass("active");
});

// by default = regular crust
$('.crust-gluten-free').removeClass("crust-gluten-free");

$('.btn-crust').click(function() {
    $('.btn-crust').toggleClass("active");
    $('.crust').toggleClass("crust-gluten-free");
});

//by default NO white sauce
$('.sauce-white').removeClass("sauce-white");

$('.btn-sauce').click(function() {
   $('.btn-sauce').toggleClass("active");
   $('.sauce').toggleClass("sauce-white");
});

//by default REMOVE sauce-white and gluten-free-crust from price-list
$('.price > ul > li:contains("white")').hide();
$('.price > ul > li:contains("gluten")').hide();

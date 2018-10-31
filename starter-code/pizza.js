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

//by default REMOVE white sauce and gluten-free crust from price-list
$('.price > ul > li:contains("white")').hide();
$('.price > ul > li:contains("gluten")').hide();

//click btn-pepperoni = remove pep from price list
$('.btn-pepperonni').click(function() {
    $('.price >ul > li:contains("pepperonni")').toggle();
})

//click btn-sauce = white-sauce on price list
$('.btn-sauce').click(function() {
    $('.price >ul > li:contains("white")').toggle();
})

//click btn-crust = gluten-free-crust on price list
$('.btn-crust').click(function() {
    $('.price >ul > li:contains("crust")').toggle();
})

//click btn-mushroom = remove mushrooms from price list
$('.btn-mushrooms').click(function() {
    $('.price >ul > li:contains("mushroom")').toggle();
})

$('.btn-green-peppers').click(function() {
    $('.price >ul > li:contains("green")').toggle();
})


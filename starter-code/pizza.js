$("aside strong").text("$13");
var currentPrice = $("aside strong").text();

var addPrice = function(toppingValue){
    var priceValue = $("aside strong").text().match(/\d+/g).map(Number)[0];
    $("aside strong").text("$" + (priceValue + toppingValue));
};
var reducePrice = function(toppingValue){
    var priceValue = $("aside strong").text().match(/\d+/g).map(Number)[0];
    $("aside strong").text("$" + (priceValue - toppingValue));
};

var peppers = $("section.green-pepper");

$(".btn-green-peppers").click(function() {
    peppers.toggleClass("green-pepper");
    $(this).toggleClass("active");
    $("aside ul li:nth-child(3)").toggle();
    $(this).is(".active") ? addPrice(1) : reducePrice(1);
});

var stem = $("section.mushroom").children(".stem");
var cap = $("section.mushroom").children(".cap");

$(".btn-mushrooms").click(function() {
    stem.toggleClass("stem");
    cap.toggleClass("cap");
    $(this).toggleClass("active");
    $("aside ul li:nth-child(2)").toggle();
    $(this).is(".active") ? addPrice(1) : reducePrice(1);
});

$(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $("aside ul li:nth-child(1)").toggle();
    $(this).is(".active") ? addPrice(1) : reducePrice(1);
});

$("section.crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$("aside ul li:nth-child(5)").hide();

$(".btn-crust").click(function() {
    $("section.crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $("aside ul li:nth-child(5)").toggle();
    $(this).is(".active") ? addPrice(5) : reducePrice(5);
});

$("section.sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$("aside ul li:nth-child(4)").hide();

$(".btn-sauce").click(function() {
    $("section.sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $("aside ul li:nth-child(4)").toggle();
    $(this).is(".active") ? addPrice(3) : reducePrice(3);
});
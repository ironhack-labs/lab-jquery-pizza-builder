//Set initial price and create functions to update it
var priceObject = {
    initialPrice: $("aside strong").text("$13"),
    addPrice: function(toppingValue){
        var priceValue = $("aside strong").text().match(/\d+/g).map(Number)[0];
        $("aside strong").text("$" + (priceValue + toppingValue));
    },
    reducePrice: function(toppingValue){
        var priceValue = $("aside strong").text().match(/\d+/g).map(Number)[0];
        $("aside strong").text("$" + (priceValue - toppingValue));
    }
};

//Add and remove green peppers
$(".btn-green-peppers").click(function() {
    $("section.green-pepper").toggle();
    $(this).toggleClass("active");
    $("aside ul li:nth-child(3)").toggle();
    $(this).is(".active") ? priceObject.addPrice(1) : priceObject.reducePrice(1);
});

//Add and remove mushrooms
$(".btn-mushrooms").click(function() {
    $(".stem").toggle();
    $(".cap").toggle();
    $(this).toggleClass("active");
    $("aside ul li:nth-child(2)").toggle();
    $(this).is(".active") ? priceObject.addPrice(1) : priceObject.reducePrice(1);
});

//Add and remove pepperonni
$(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $("aside ul li:nth-child(1)").toggle();
    $(this).is(".active") ? priceObject.addPrice(1) : priceObject.reducePrice(1);
});

//Set initial state of crust and crust button
$("section.crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$("aside ul li:nth-child(5)").hide();

//Add and remove crust
$(".btn-crust").click(function() {
    $("section.crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $("aside ul li:nth-child(5)").toggle();
    $(this).is(".active") ? priceObject.addPrice(5) : priceObject.reducePrice(5);
});

//Set initial state of white sauce and white sauce button
$("section.sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$("aside ul li:nth-child(4)").hide();

//Add and remove white sauce
$(".btn-sauce").click(function() {
    $("section.sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $("aside ul li:nth-child(4)").toggle();
    $(this).is(".active") ? priceObject.addPrice(3) : priceObject.reducePrice(3);
});
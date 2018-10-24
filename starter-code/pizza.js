// Write your Pizza Builder JavaScript in this file.
//Pepperoni
$(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $(".price li:contains('pepperonni')").toggle();
    totalPrice();
});

//Mushroom
$(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $(".price li:contains('mushrooms')").toggle();
    totalPrice();
});

//Green Pepper
$(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $(".price li:contains('green peppers')").toggle();
    totalPrice();
});

//Default setting
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$(".price li:contains('gluten-free crust')").hide();
$(".price li:contains('white sauce')").hide();

//Sauce
$(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price li:contains('white sauce')").toggle();
    totalPrice();
});

//Crust
$(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li:contains('gluten-free crust')").toggle();
    totalPrice();
});

//price

// console.log($(".price > ul > li"));
var priceIngredient = $(".price > ul > li");
var finalPrice = $(".price > strong");
finalPrice.text("$13");

function totalPrice(){
    var base = 10;
    for (i = 0; i <priceIngredient.length; i++){
        if (priceIngredient.eq(i).is(":visible")){
            base += Number(priceIngredient.eq(i).html()[1]);
         }
        }finalPrice.html(base);
    } 
    
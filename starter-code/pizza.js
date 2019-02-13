// Write your Pizza Builder JavaScript in this file.
$(".pep" ).toggle();
$(".mushroom" ).toggle();
$(".green-pepper" ).toggle();
$( "li:contains('$1 pepperonni')" ).toggle();
$( "li:contains('$1 mushroom')" ).toggle();
$( "li:contains('$1 green peppers')" ).toggle(); 
$( "li:contains('$3 white sauce')" ).toggle();
$( "li:contains('$5 gluten-free crust')" ).toggle();

var price = 10;
var totalPrice = $("strong");

totalPrice.html("$" + price);

$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $( "li:contains('$1 pepperonni')" ).toggle();
    if ($(".pep").css("display","block")){
        price++;
    } 
    totalPrice.html("$" + price);
});

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $( "li:contains('$1 mushroom')" ).toggle();
    if ($(".mushrooms").css("display","block")){
        price++;
    }
    totalPrice.html("$" + price);
});

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $( "li:contains('$1 green peppers')" ).toggle(); 
    if ($(".green-pepper").css("display","block")){
        price++;
    }
    totalPrice.html("$" + price);
});

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $( "li:contains('$3 white sauce')" ).toggle();
    if ($(".sauce").css("display","block")){
        price +=3;
    } else {
       price = price - 3;
    } 
    totalPrice.html("$" + price);
});

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $( "li:contains('$5 gluten-free crust')" ).toggle();
    if ($(".crust").css("display","block")){
        price +=5;
    }
    totalPrice.html("$" + price);
});

   


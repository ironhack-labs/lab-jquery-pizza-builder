// Write your Pizza Builder JavaScript in this file.
$("strong").text("$13");

$(document).ready(function(){
  $(".sauce").removeClass('sauce-white');
  $(".crust").removeClass('crust-gluten-free');
});

var totalPrice = 13;
var pepPrice = 1;
var mushPrice = 1;
var greenPrice = 1;
var saucePrice = 3;
var crustPrice = 5;

$(".btn-pepperonni").on("click", function(event) {
        event.preventDefault();
        $(".btn-pepperonni").toggleClass("active");
        $(".pep").fadeToggle(1000);
        $("strong").empty();
        if ($(".btn-pepperonni").hasClass("active")){
            totalPrice += pepPrice;
        }
        else{
            totalPrice -= pepPrice;
            $("#price-list").append('<li id="pepperoni"> Pepperoni ' + pepPrice + "$" + "</li>");
        }
        $("strong").append("$" + totalPrice);
});
$(".btn-mushrooms").on("click", function(event) {
        event.preventDefault();
        $(".btn-mushrooms").toggleClass("active");
        $(".mushroom").fadeToggle(1000);
        $("strong").empty();
        if ($(".btn-mushrooms").hasClass("active")){
            totalPrice += mushPrice;
        }
        else{
            totalPrice -= mushPrice;
            $("#price-list").append('<li id="mushroom"> Mushroom ' + mushPrice + "$" + "</li>");
        }
        $("strong").append("$" + totalPrice);
    });
    $(".btn-green-peppers").on("click", function(event) {
            event.preventDefault();
            $(".btn-green-peppers").toggleClass("active");
            $(".green-pepper").fadeToggle(1000);
            $("strong").empty();
            if ($(".btn-green-peppers").hasClass("active")){
                totalPrice += greenPrice;
                $("#green-pepper").remove();
            }
            else{
                totalPrice -= greenPrice;
                $("#price-list").append('<li id="green-pepper"> Green Pepper ' + greenPrice + "$" + "</li>");
            }
            $("strong").append("$" + totalPrice);
    });
    $(".btn-crust").on("click", function(event) {
        event.preventDefault();
        $(".btn-crust").toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
        $("strong").empty();
        if ($(".btn-crust").hasClass("active")){
            totalPrice -= crustPrice;
            $("#crust").remove();
        }
        else{
            totalPrice += crustPrice;
            $("#price-list").append('<li id="crust"> Crust ' + crustPrice + "$" + "</li>");
        }
        $("strong").append("$" + totalPrice);
    });
     $(".btn-sauce").on("click", function(event) {
        event.preventDefault();
        $(".btn-sauce").toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
        $("strong").empty();
        if ($(".btn-sauce").hasClass("active")){
            totalPrice -= saucePrice;
            $("#sauce").remove();
        }
        else{
            totalPrice += saucePrice;
        }
        $("strong").append("$" + totalPrice);
});

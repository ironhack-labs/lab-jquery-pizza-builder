// Write your Pizza Builder JavaScript in this file.
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");
$(".price ul li:nth-child(4)").toggle();
$(".price ul li:nth-child(5)").toggle();

var number = 0;

$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(1)").toggle();
    calculation();
 });
 
 $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").toggle();
    calculation();
 });
 
 $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").toggle();
 });
 
 $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul li:nth-child(4)").toggle();
 });
 
 $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price ul li:nth-child(5)").toggle();
 });

 function calculation() {
    var pepPrice = $(".price ul li:nth-child(1)").text();
    var mushPrice = $(".price ul li:nth-child(2)").text();
    var pepperPrice = $(".price ul li:nth-child(3)").text();
    var saucePrice = $(".price ul li:nth-child(4)").text();
    var crustPrice = $(".price ul li:nth-child(5)").text();
    var totalPrice = parseInt(pepPrice[1]) + parseInt(mushPrice[1]) + parseInt(pepperPrice[1]) + parseInt(saucePrice[1]) + parseInt(crustPrice[1]) + 10 ;
    return $("strong").text("$" + totalPrice);
 }
// Write your Pizza Builder JavaScript in this file.
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");
$(".price ul li:nth-child(4)").toggle();
$(".price ul li:nth-child(5)").toggle();

var number = 13;
$("strong").text("$" + number);

var p = true;
$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(1)").toggle();
    if(p === true) {
        p = false;
        number -= 1;
    } else if (p === false){
        p = true;
        number += 1;

    }
    calculation();
 });
 
 var m = true;
 $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").toggle();
    if(m === true) {
        m = false;
        number -= 1;
    } else if (m === false){
        m = true;
        number += 1;
    }
    calculation();
 });

var gp = true;
 $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").toggle();
    if(gp === true) {
        gp = false;
        number -= 1;
    } else if (gp === false){
        gp = true;
        number += 1;
    }
    calculation();
 });
 
 var sa = false;
 $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul li:nth-child(4)").toggle();
    if(sa === true) {
        sa = false
        number -= 3;
    } else if (sa === false){
        sa = true;
        number += 3;
    }
    calculation();
 });
 
 var cru = false;
 $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price ul li:nth-child(5)").toggle();
    if(cru === true) {
        cru = false;
        number -= 5;
    } else if (cru === false){
        cru = true;
        number += 5;
    }
    calculation();
 });

 function calculation() {
    /*var pepPrice = $(".price ul li:nth-child(1)").text();
    var mushPrice = $(".price ul li:nth-child(2)").text();
    var pepperPrice = $(".price ul li:nth-child(3)").text();
    var saucePrice = $(".price ul li:nth-child(4)").text();
    var crustPrice = $(".price ul li:nth-child(5)").text();
    var totalPrice = parseInt(pepPrice[1]) + parseInt(mushPrice[1]) + parseInt(pepperPrice[1]) + parseInt(saucePrice[1]) + parseInt(crustPrice[1]) + 10 ;
    return $("strong").text("$" + totalPrice);*/
    return $("strong").text("$" + number);
 }
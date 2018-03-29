// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
    $(".pep").hide();
    $(".mushroom").hide();
    $(".green-pepper").hide();
    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");
    $(".pep").hide();
    $(".price ul li").hide();
    $("strong").html("$10");
    $(".btn-pepperonni").trigger("click");
    $(".btn-mushrooms").trigger("click");
    $(".btn-green-peppers").trigger("click");

    totalPrice()
})


function totalPrice(){
    var basePrice = 10
    var priceObj = { ".btn-pepperonni": 1, ".btn-mushrooms": 1, ".btn-green-peppers": 1, ".btn-sauce": 3, ".btn-crust": 5};
    $.each(priceObj, function(key, value){
        if ($(key).hasClass("active")){
            basePrice += value
        }
    })
    $("body > aside > strong").html("$" + basePrice);
}

$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    
    $(".price ul li:contains('pepperonni')").toggle();
    
    totalPrice();
})

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    
    $(".price ul li:contains('mushroom')").toggle();
    totalPrice();
})

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active")
    
    $(".price ul li:contains('peppers')").toggle();
    totalPrice();
})

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    if ($(".sauce").hasClass("sauce-white")){
        $(".btn-sauce").addClass("active")
    } else {
        $(".btn-sauce").removeClass("active")
    }
    
    $(".price ul li:contains('white')").toggle();
    totalPrice();    
})

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");

    if ($(".crust").hasClass("crust-gluten-free")){
        $(".btn-crust").addClass("active")
    } else {
        $(".btn-crust").removeClass("active");
    }
    
    $(".price ul li:contains('gluten')").toggle();
    totalPrice();
    
})
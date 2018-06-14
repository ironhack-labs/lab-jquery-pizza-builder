// Write your Pizza Builder JavaScript in this file.

$(".panel price").removeClass("panel price");

$('.btn-green-peppers').click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    });

$('.btn-mushrooms').click(function(){
    $(".mushroom").toggle();
    $(".btn-mushroom").toggleClass("active");
    });

$('.btn-pepperonni').click(function(){
    $(".pep").toggle();
    
    });

$('.crust').removeClass('crust-gluten-free');
$(".sauce").removeClass('sauce-white');

$('.btn-crust').click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    });
    
$('.btn-sauce').click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn").toggleClass("active");
    });







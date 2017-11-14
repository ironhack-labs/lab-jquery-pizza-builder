// Write your Pizza Builder JavaScript in this file.
$(function(){
    ingActive(".pep",".btn-pepperonni");
    ingActive(".green-pepper",".btn-green-peppers");
    ingActive(".mushroom",".btn-mushrooms");

//Iteration 1
$(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    ingActive(".pep",".btn-pepperonni");
        
});

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    ingActive(".green-pepper",".btn-green-peppers");
    
});

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    ingActive(".mushroom",".btn-mushrooms");
    
});

//Iteration 2

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function(){
    eleClass(".crust","crust-gluten-free",".btn-crust");
    $(".crust").toggleClass("crust-gluten-free");
});

$(".sauce").removeClass("sauce-white");

$(".btn-sauce").click(function(){
    eleClass(".sauce","sauce-white",".btn-sauce");
    $(".sauce").toggleClass("sauce-white");
});

//Iteration 3


});

function ingActive(element,button){
    if($(element+":visible").length>0)
    {
       $(button).removeClass("active"); 
    }
    else $(button).addClass("active");
}

function eleClass(element,classs,button){
    if($(element).hasClass(classs))
    {
       $(button).addClass("active"); 
    }
    else $(button).removeClass("active");
}
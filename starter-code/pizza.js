// Write your Pizza Builder JavaScript in this file.
$(function(){


//Iteration 1
$(".btn-pepperonni").click(function(){
    ingActive(".pep",".btn-pepperonni");
    $(".pep").toggle();
        
});

$(".btn-green-peppers").click(function(){
    ingActive(".green-pepper",".btn-green-peppers");
    $(".green-pepper").toggle();
});

$(".btn-mushrooms").click(function(){
    ingActive(".mushroom",".btn-mushrooms");
    $(".mushroom").toggle();
});

//Iteration 2

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function(){
    eleClass(".crust","crust-gluten-free",".btn-crust");
    $(".crust").addClass("crust-gluten-free");
});

$(".sauce").removeClass("sauce-white");

$(".btn-sauce").click(function(){
    eleClass(".sauce","sauce-white",".btn-sauce");
    $(".sauce").addClass("sauce-white");
});

//Iteration 3


});

function ingActive(element,button){
    if($(element+":visible").length>0)
    {
       $(button).addClass("active"); 
    }
    else $(button).removeClass("active");
}

function eleClass(element,classs,button){
    if($(element).hasClass(classs))
    {
       $(button).addClass("active"); 
    }
    else $(button).removeClass("active");
}
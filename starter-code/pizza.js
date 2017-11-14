// Write your Pizza Builder JavaScript in this file.
$(function(){

//Iteration 1
$(".btn-pepperonni").click(function(){
        $(".pep").toggle();
});

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
});

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
});

//Iteration 2

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").click(function(){
    $(".crust").addClass("crust-gluten-free");
});

$(".sauce").removeClass("sauce-white");

$(".btn-sauce").click(function(){
    $(".sauce").addClass("sauce-white");
});

});
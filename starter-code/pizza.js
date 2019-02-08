// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").click(function(){
    $("* .pep").toggle();
});
$(".btn-mushrooms").click(function(){
    $("* .mushroom").toggle();
});
$(".btn-green-peppers").click(function(){
    $("* .green-pepper").toggle();
});
$(".btn-sauce").click(function(){
    $("* .sauce").toggle();
});
$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
});
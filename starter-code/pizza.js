// Write your Pizza Builder JavaScript in this file.

$(".btn.btn-pepperonni.active").click(function(){

    $(".pep").toggle();
 });
 $(".btn.btn-mushrooms.active").click(function(){
 
    $(".mushroom").toggle();
 });
 $(".btn.btn-green-peppers.active").click(function(){
 
    $(".green-pepper").toggle();
 });
 
 $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
 });
 
 $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
 });

 $("button").click(function(){
    $(this).toggleClass("active");
 });
 

 
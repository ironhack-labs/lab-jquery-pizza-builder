// Write your Pizza Builder JavaScript in this file.


$(document).ready(function(){
  var pepe = ".price ul :first-child";
  var mush = ".price ul :nth-child(2n)";
  var green = ".price ul :nth-child(3n)";
  var white = ".price ul :nth-child(4n)";
  var gluten = ".price ul :nth-child(5n)";

  $(".pep, .mushroom, .green-pepper, .sauce-white").css("display","none")
  $(pepe).css("display","none")
  $(mush).css("display","none")
  $(green).css("display","none")
  $(white).css("display","none")
  $(gluten).css("display","none")

  $(".btn-pepperonni").on("click",function(){  
    $(".pep").toggle();
    $(this).toggleClass("active");
    $(pepe).toggle();
    })
 
    $

 $(".btn-mushrooms").on("click",function(){ 
   $(".mushroom").toggle();
   $(this).toggleClass("active");
   $(mush).toggle();

 })
 
 $(".btn-green-peppers").on("click",function(){
   $(".green-pepper").toggle();
   $(this).toggleClass("active");
   $(green).toggle();

 })
 $(".btn-sauce").on("click",function(){
   $(".cheese").toggle();
   $(this).toggleClass("active");
   $(white).toggle();

 })
 $(".btn-crust").on("click",function(){
   $(".sauce-white").toggle();
   $(this).toggleClass("active");
   $(gluten).toggle();
 }) 

})

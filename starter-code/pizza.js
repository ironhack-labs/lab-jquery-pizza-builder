// Write your Pizza Builder JavaScript in this file.
window.onload = function () {
$(".green-pepper").removeClass("green-pepper")
$(".cap").text("");
$("#pizza  section div").removeClass("stem cap");
$("#pizza section").removeClass("mushroom")
$(".pep").text("");
$("#pizza section").removeClass("pep")
 $("#pizza section").removeClass("crust-gluten-free")
 $("#pizza section section:last-child").removeClass("sauce-white")


$(".btn-green-peppers").click(function(){
  for (let i = 1; i < 22; i++) {
    $("#pizza section:nth-of-type(" + i + "):not(section section)").toggleClass("green-pepper"); 
  }
    
  })

  $(".btn-mushrooms").click(function(){
    for (let i = 22; i < 54; i++) {
      $("#pizza section:nth-of-type(" + i + ")").toggleClass("mushroom");
      
    }

    $("#pizza section div:first-child").toggleClass("cap");
    $("#pizza section div:last-child").toggleClass("stem");
      
  })



$(".btn-pepperonni").click(function(){
  for (let i = 54; i < 86; i++) {
    $("#pizza section:nth-of-type(" + i + "):not(section section)").toggleClass("pep");
 
  }
  
})

$(".btn-sauce").click(function(){
  $("#pizza section section:last-child").toggleClass("sauce-white");
})

$(".btn-crust").click(function(){
  $("#pizza section:last-child:not(section section)").toggleClass("crust-gluten-free");
})






}
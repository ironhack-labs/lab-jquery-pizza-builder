// Write your Pizza Builder JavaScript in this file.
window.onload = function () {
$(".green-pepper").removeClass("green-pepper")
$(".cap").text("");
$("div  section div").removeClass("stem cap");
$("div section").removeClass("mushroom")
$(".pep").text("");
$("div section").removeClass("pep")
// $("div section").removeClass()
// $("div section").removeClass()


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









}
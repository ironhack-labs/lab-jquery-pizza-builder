// Write your Pizza Builder JavaScript in this file.
var price = 13;
var pep = true;
var mush = true;
var green = true;
var white = false;
var gluten = false;

$(document).ready(function(){
  $(".btn-pepperonni").on("click",function(){
    $("#pizza .pep").toggleClass("ing-off");
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    pep = !pep;
    if (!pep) price -= 1;
    else price += 1;
    $("strong").text("$" + price);
  })
  $(".btn-mushrooms").on("click",function(){
    $("#pizza .mushroom").toggleClass("ing-off");
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    mush = !mush;
    if (!mush) price -= 1;
    else price += 1;
    $("strong").text("$" + price);
  })
  $(".btn-green-peppers").on("click",function(){
    $("#pizza .green-pepper").toggleClass("ing-off");
    $(".btn-green-peppers").toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    green = !green;
    if (!green) price -= 1;
    else price += 1;
    $("strong").text("$" + price);
  })
  $(".btn-sauce").on("click",function(){
    $("#pizza .sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    white = !white;
    if (!white) price -= 3;
    else price += 3;
    $("strong").text("$" + price);
  })
  $(".btn-crust").on("click",function(){
    $("#pizza .crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    gluten = !gluten;
    if (!gluten) price -= 5;
    else price += 5;
    $("strong").text("$" + price);
  })
})

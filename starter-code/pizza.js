// Write your Pizza Builder JavaScript in this file.

$(function() {
  $(".btn-pepperonni").click(function() {
    $(".pep").toggle("");
    $(".btn-pepperonni").toggleClass("active");
    $("aside li:contains(pepperonni)").toggle("");
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle("");
    $(".btn-mushrooms").toggleClass("active");
    $("aside li:contains(mushrooms)").toggle("");
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle("");
    $(".btn-green-peppers").toggleClass("active");
    $("aside li:contains(peppers)").toggle("");
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $("aside li:contains(gluten-free)").toggle("invisible");
  });
  
  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("aside li:contains(white sauce)").toggle("invisible");
  });

  $(".btn").click(function() {
var calc = calcPrice();
$("aside strong").text("$ " + calc)
  });

  function calcPrice(){
    var total = 10;
    if ($(".btn-pepperonni").hasClass("active")){
      total += 1
    }
    if ($(".btn-mushrooms").hasClass("active")){
      total += 1
    }
    if ($(".btn-green-peppers").hasClass("active")){
      total += 1
    }
    if ($(".btn-crust").hasClass("active")){
      total += 3
    }
    if ($(".btn-sauce").hasClass("active")){
      total += 5
    }
    return total

  }

});

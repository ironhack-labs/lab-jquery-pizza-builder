// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $('.btn').click(function(){
    $(this).toggleClass('active');
  });

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $("li:contains('pepperonni')").toggle();
  });
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $("li:contains('green peppers')").toggle();
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $("li:contains('mushroom')").toggle();
  });

  $("section.crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");


  $(".btn-crust").click(function(){
    $("section.crust").toggleClass("crust-gluten-free");
    $("li:contains('gluten-free crust')").toggle();
  });
  $(".btn-sauce").click(function(){
    $("section.sauce").toggleClass("sauce-white");
    $("li:contains('white sauce')").toggle();
  });

  $("li:contains('white sauce')").hide();
  $("li:contains('gluten-free crust')").hide();
});

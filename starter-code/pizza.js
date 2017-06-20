// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $("section.crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $("li:contains('white sauce')").hide();
  $("li:contains('gluten-free crust')").hide();

  var pep = 1;
  var greenPep =1;
  var mushroom = 1;

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

  $(".btn-crust").click(function(){
    $("section.crust").toggleClass("crust-gluten-free");
    $("li:contains('gluten-free crust')").toggle();
  });
  $(".btn-sauce").click(function(){
    $("section.sauce").toggleClass("sauce-white");
    $("li:contains('white sauce')").toggle();
  });

  var priceList = $(".price ul").toArray().map(li, index);
  console.log(priceList)

});

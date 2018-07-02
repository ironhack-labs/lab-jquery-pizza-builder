// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var pepBtn = $(".btn-pepperonni");
  var shroomsBtn = $(".btn-mushrooms");
  var greenPBtn = $(".btn-green-peppers");
  var sauceBtn = $(".btn-sauce");
  var crustBtn = $(".btn-crust");

  $(".btn").click(function(){
    $(this).toggleClass("active");
  });

  $(pepBtn).click(function(){
    $("[class~='pep']").toggle();
    $(".price ul li:contains('pepperonni')").toggle();
    updatePrice();
  });

  $(shroomsBtn).click(function(){
    $("[class~='mushroom']").toggle();
    $(".price ul li:contains('mushroom')").toggle();
    updatePrice();
  });

  $(greenPBtn).click(function(){
    $("[class~='green-pepper']").toggle();
    $(".price ul li:contains('green peppers')").toggle();
    updatePrice();
  });

  $(sauceBtn).click(function(){
    $("[class~='sauce']").toggleClass("sauce-white");
    $(".price ul li:contains('white sauce')").toggle();
    updatePrice();
  });
  
  $(crustBtn).click(function(){
    $("[class~='crust']").toggleClass("crust-gluten-free");
    $(".price ul li:contains('gluten-free crust')").toggle();
    updatePrice();
  });

  updatePrice = function() {
    var liItems = Array.from($("aside ul li:visible('true')"));
    var toppingsTotal = 0;
    liItems.forEach(function(liItem){
      toppingsTotal += Number(liItem.textContent.substr(1).substr(0, liItem.textContent.substr(1).indexOf(" ")));
    });
    $("aside strong:contains('$')")[0].textContent = "$" + (10 + toppingsTotal);
  }

  //click buttons to remove white sauce and gluten-free crust by default
  $(".btn-sauce").click();
  $(".btn-crust").click();
});
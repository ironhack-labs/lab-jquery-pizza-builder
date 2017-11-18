// Write your Pizza Builder JavaScript in this file.

$(function() {

  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");
  $("aside.panel li:nth-child(4)").hide();
  $("aside.panel li:nth-child(5)").hide();


  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $("aside.panel li:nth-child(1)").toggle();
    updatePrice();
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $("aside.panel li:nth-child(2)").toggle();
    updatePrice();
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $("aside.panel li:nth-child(3)").toggle();
    updatePrice();
  });

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $("aside.panel li:nth-child(4)").toggle();
    updatePrice();
  });

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $("aside.panel li:nth-child(5)").toggle();
    updatePrice();
  });
});

function updatePrice() {
  var total = 10;
  var prices = $("aside.panel li:visible");
  for(var i=0; i<prices.length; i++) {
    total += Number(prices[i].innerText[1]);
  }
  $('aside.panel strong')[0].innerText = '$' + total;
}

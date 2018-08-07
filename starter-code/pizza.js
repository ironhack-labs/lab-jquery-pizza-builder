// Write your Pizza Builder JavaScript in this file.
var currentPrice = 13;

$(function() {
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
  $(".price ul li:nth-child(4)").hide();
  $(".price ul li:nth-child(5)").hide();
  $(".price strong").text(currentPrice.toString());

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $(".price ul li:nth-child(1)").toggle();
    updatePrice(1, $(this).hasClass("active"));
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $(".price ul li:nth-child(2)").toggle();
    updatePrice(1, $(this).hasClass("active"));
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $(".price ul li:nth-child(3)").toggle();
    updatePrice(1, $(this).hasClass("active"));
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $(".price ul li:nth-child(4)").toggle();
    updatePrice(3, $(this).hasClass("active"));
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $(".price ul li:nth-child(5)").toggle();
    updatePrice(5, $(this).hasClass("active"));
  });
});

function updatePrice(ingredientPrice, isActive) {
  if (!isActive) {
    ingredientPrice *= -1;
  }

  $(".price strong").text("$" + (currentPrice += ingredientPrice).toString());
}

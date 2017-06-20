// Write your Pizza Builder JavaScript in this file.
function getPrice() {
  var price = 10;
  $("aside li").each(function() {
    if ($(this).is(":visible")) {
      console.log("hola");
      var element = $(this).text().replace(/[^0-9]/g, "");
      price += parseInt(element);
      console.log(price);
    }
  });
  return $("aside strong").text("$" + price);
}

$(document).ready(function() {



  $("aside li:contains('white sauce')").hide();
  $("aside li:contains('gluten-free')").hide();
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  getPrice();

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $("aside li:contains('pepperonni')").toggle();
    getPrice();
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $("aside li:contains('mushrooms')").toggle();
    getPrice();
  });
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $("aside li:contains('green pepper')").toggle();
    getPrice();
  });
  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $("aside li:contains('white sauce')").toggle();
    getPrice();
  });
  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $("aside li:contains('gluten-free')").toggle();
    getPrice();
  });
});

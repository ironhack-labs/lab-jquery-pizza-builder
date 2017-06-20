// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");

  $(".price ul > li:contains('peppers')").addClass("visible");
  $(".price ul > li:contains('pepperonni')").addClass("visible");
  $(".price ul > li:contains('mushroom')").addClass("visible");


  $(".price ul > li:contains('sauce')").toggle();
  $(".price  ul > li:contains('gluten-free')").toggle();

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul > li:contains('peppers')").toggle().toggleClass("visible");


  });

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul > li:contains('pepperonni')").toggle().toggleClass("visible");
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul > li:contains('mushroom')").toggle().toggleClass("visible");
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul > li:contains('sauce')").toggle().toggleClass("visible");
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price ul > li:contains('gluten-free')").toggle().toggleClass("visible");
  });

  var price = 10; // TO DO

  // price = $(".price b").text();
  // price = price.split(" ");
  // price = parseInt(price[0][1]); // Second position of String example: $10
  // console.log(price);

  $(".price ul li").each(function() {
    if ( $(this).hasClass('visible')) {
      var value = $(this).text();
      value = value.split(" ");
      value = parseInt(value[0][1]); // Second position of String example: $1
      price += value;
      console.log(price);
    }

    $(this).closest('.price').find('strong').text(price);
  });



});

$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");
$(".panel.price")
  .find("li:contains('sauce')")
  .toggle();
$(".panel.price")
  .find("li:contains('gluten')")
  .toggle();

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".panel.price")
    .find("li:contains('pepperonni')")
    .toggle();
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".panel.price")
    .find("li:contains('mushrooms')")
    .toggle();
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".panel.price")
    .find("li:contains('peppers')")
    .toggle();
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".panel.price")
    .find("li:contains('sauce')")
    .toggle();
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".panel.price")
    .find("li:contains('gluten')")
    .toggle();
});

// Write your Pizza Builder JavaScript in this file.


$("button.btn-pepperonni").click(function(event) {
  $('.pep').toggle();
  $(this).toggleClass("active");
  $(".price ul li:first-child").toggle();
});
$("button.btn-mushrooms").click(function(event) {
  $('.mushroom').toggle();
  $(this).toggleClass("active");
  $(".price ul li:nth-child(2)").toggle();
});

$("button.btn-green-peppers").click(function(event) {
  $('.green-pepper').toggle();
  $(this).toggleClass("active");
  $(".price ul li:nth-child(3)").toggle();
});


$("*").removeClass("crust-gluten-free");

$("*").removeClass("sauce-white");

$("button.btn-sauce").click(function(event) {
  $('.sauce').toggleClass('sauce-white');
});
$("button.btn-crust").click(function(event) {
  $('.crust').toggleClass('crust-gluten-free');
});

$(".price ul li:nth-child(4)"). remove();
$(".price ul li:last-child"). remove();

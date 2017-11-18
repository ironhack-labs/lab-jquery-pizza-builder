// Write your Pizza Builder JavaScript in this file.

$(function() {
  $(".btn-crust").removeClass("active");
  $("button.btn-sauce").removeClass("active");
});

$("button.btn-crust").click(function() {
  $(this).toggleClass("active");
    $("section.crust > section.cheese").toggle();
});

$("button.btn-pepperonni").click(function() {
  $(this).toggleClass("active");
    $("section.pep").toggle();
});
$("button.btn-green-peppers").click(function() {
  $(this).toggleClass("active");
      $("section.green-pepper").toggle();
});

$("button.btn-mushrooms").click(function() {
  $(this).toggleClass("active");
    $("section.mushroom").toggle();
});
$("button.btn-sauce").click(function() {
  $(this).toggleClass("active");
    $("section.sauce").toggle();
});
//$("button.btn-crust").toggleClass("active");
//$(this).toggleClass("active");
//if ($(".btn-crust").hasClas("active")) {
//$(".btn-crust").removeClass("active");
//}
//});

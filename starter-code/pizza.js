// Write your Pizza Builder JavaScript in this file.

$("button.btn-crust").click(function() {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $("section.crust > section.cheese").toggle();
  } else {
    $(".section.crust > section.cheese").toggle();
  }
});
$("button.btn-pepperonni").click(function() {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $("section.pep").toggle();
  } else {
    $(".section.pep").toggle();
  }
});

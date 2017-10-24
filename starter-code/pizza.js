// Write your Pizza Builder JavaScript in this file.
$(main);

function main() {
  $(".pep").hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();
  $(".crust-gluten-free").hide();
  $(".crust").show();
  $('.active').removeClass('active');

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    if ($(".btn-pepperonni").toggleClass('active'));
  });

  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    if ($(".btn-mushrooms").toggleClass('active'));
  });

  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    if ($(".btn-green-peppers").toggleClass('active'));
  });

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    if ($(".btn-crust").toggleClass('active'));
  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    if ($(".btn-sauce").toggleClass('active'));
  });
}

// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $('.sauce-white').removeClass('sauce-white');
  $('.pep').hide();
  $('.mushroom').hide();
  $('.green-pepper').hide();
  $('.price li').hide();



  $('.btn-pepperonni').on("click", function (e) {
    $(".pep").toggle(500);
    $('.roni').show();
  });

  $('.btn-mushrooms').on("click", function (e) {
    $(".mushroom").toggle(500);

  });

  $('.btn-green-peppers').on("click", function (e) {
    $(".green-pepper").toggle(500);
  });

    $(".btn-crust").on("click", function(e) {
      $(".crust").toggleClass("crust-gluten-free");
  });

  $(".btn-sauce").on("click", function(e) {
    $(".sauce").toggleClass("sauce-white");
  });
});

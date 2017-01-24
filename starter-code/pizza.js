// Write your Pizza Builder JavaScript in this file.


$(document).ready(function() {
  $('.btn-pepperonni').toggleClass('active');
  $(".btn-pepperonni").on("click", function() {
    $("#pizza .pep").toggle();
    $('.btn-pepperonni').toggleClass('active');
  });

  $('.btn-mushrooms').toggleClass('active');
  $(".btn-mushrooms").on("click", function() {
    $("#pizza .mushroom").toggle();
    $('.btn-mushrooms').toggleClass('active');

  });
  $('.btn-green-peppers').toggleClass('active');
  $(".btn-green-peppers").on("click", function() {
    $("#pizza .green-pepper").toggle();
    $('.btn-green-peppers').toggleClass('active');

  });


  $(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $('.btn-crust').toggleClass('active');

  });


  $(".btn-sauce").on("click", function() {
    $(".sauce").toggleClass("sauce-white");
    $('.btn-sauce').toggleClass('active');

  });
});

//   $(".btn-pepperonni").click(function() {
//       $('.btn-pepperonni').toggleClass('active');
//       $('.btn-pepperonni').toggle();
// });

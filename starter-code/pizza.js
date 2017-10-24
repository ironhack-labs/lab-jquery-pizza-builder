// Write your Pizza Builder JavaScript in this file.
function main() {
  $(".btn-pepperonni").on('click', function() {
    $(this).toggleClass('active');
    $(".pep").toggle();
  });

  $(".btn-mushrooms").on('click', function() {
    $(this).toggleClass('active');
    $(".mushroom").toggle();
  });

  $(".btn-green-peppers").on('click', function() {
    $(this).toggleClass('active');
    $(".green-pepper").toggle();
  });


  $(".btn-crust").on('click', function() {
    $(this).toggleClass('active');
    $('.crust-gluten-free').toggleClass("crust-gluten-free");
    $(".gluten-free-crust").toggle();
  });
}

//         $('.crust').toggleClass("gluten-free-crust");









$(document).ready(main);

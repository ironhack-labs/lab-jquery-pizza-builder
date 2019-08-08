// Write your Pizza Builder JavaScript in this file.

// Adding and removing pepperonni
$(document).ready(function() {
  $(".btn-pepperonni").click(function() {
    $(".pep").toggleClass("off");
  });
});

// Adding and removing mushroom
$(document).ready(function() {
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggleClass("off");
  });
});

// Adding and removing green pepper
$(document).ready(function() {
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggleClass("off");
  });
});

/* Reference:

$( document ).ready(function() {
  $('.heart').click(function(){
    $(this).toggleClass('on');
  });
});

*/

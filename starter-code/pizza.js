// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $('.btn').click(function(){
    $(this).toggleClass('active');
  });

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
  });
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
  });
  
});

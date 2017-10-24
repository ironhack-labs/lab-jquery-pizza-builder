// Write your Pizza Builder JavaScript in this file.
function init() {
  // Add or remove pepperoni
  // Check the pepperoni button status
  $(".btn-pepperonni").click(function() {
    if ($(".pep").attr("style")) {
      $(".pep").css("display","");
    }
    else {
      $(".pep").css("display","none");
    }
  });

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
  });

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
  });
}

$(document).ready(init());

// Write your Pizza Builder JavaScript in this file.
function init() {
  // Add or remove pepperoni
  $(".btn-pepperonni").click(function() {
    if ($(".pep").attr("style")) {
      $(".pep").css("display","");
    }
    else {
      $(".pep").css("display","none");
    }
    $(".btn-pepperonni").toggleClass("active");
  });
  // Add or remove mushrooms
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
  });
  // Add or remove green-pepper
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
  });

  // select white sauce adn gluten free crust
  $(".btn-sauce").click(function(){
    $(".sauce-white").toggle();
    $(".btn-sauce").toggleClass("active");
  });

  $(".btn-crust").click(function(){
    $(".cheese").toggle();
    $(".btn-crust").toggleClass("active");
  });
}

$(document).ready(init());

// Write your Pizza Builder JavaScript in this file.
function init() {
  //ITERATION 1
  $(".btn-pepperonni").click(function() {
    if($(".pep").attr("style")) {
      $(".pep").css("display", "");
      $(".btn-pepperonni").addClass("active");
      $(".price ul li:first").css("display", "");
    } else {
      $(".pep").css("display", "none");
      $(".btn-pepperonni").removeClass("active");
      $(".price ul li:first").css("display", "none");
    }
  });

  $(".btn-mushrooms").click(function() {
    if($(".mushroom").attr("style")) {
      $(".mushroom").css("display", "");
      $(".btn-mushrooms").addClass("active");
      $(".price ul li:nth-child(2)").css("display", "");
    } else {
      $(".mushroom").css("display", "none");
      $(".btn-mushrooms").removeClass("active");
      $(".price ul li:nth-child(2)").css("display", "none");
    }
  });

  $(".btn-green-peppers").click(function() {
    if($(".green-pepper").attr("style")) {
      $(".green-pepper").css("display", "");
      $(".btn-green-peppers").addClass("active");
      $(".price ul li:nth-child(3)").css("display", "");
    } else {
      $(".green-pepper").css("display", "none");
      $(".btn-green-peppers").removeClass("active");
      $(".price ul li:nth-child(3)").css("display", "none");
    }
  });

  //ITERATION 2
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");


  $(".btn-crust").click(function() {
    if($(".crust").hasClass("crust-gluten-free")) {
      $(".crust").removeClass("crust-gluten-free");
      $(".btn-crust").removeClass("active");
      $(".price ul li:nth-child(5)").css("display", "none");
    } else {
      $(".crust").addClass("crust-gluten-free");
      $(".btn-crust").addClass("active");
      $(".price ul li:nth-child(5)").css("display", "");
    }
  });

  $(".btn-sauce").click(function() {
    if($(".sauce").hasClass("sauce-white")) {
      $(".sauce").removeClass("sauce-white");
      $(".btn-sauce").removeClass("active");
      $(".price ul li:nth-child(4)").css("display", "none");
    } else {
      $(".sauce").addClass("sauce-white");
      $(".btn-sauce").addClass("active");
      $(".price ul li:nth-child(4)").css("display", "");
    }
  });

  //ITERATION 3
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");

  // The button iterations are inside the click event handlers.

  //ITERATION 4
  $(".price ul li:nth-child(4)").css("display", "none");
  $(".price ul li:nth-child(5)").css("display", "none");

  // The list items iterations are inside the click event handlers.

  //ITERATION 5
  
}

$(document).ready(init());

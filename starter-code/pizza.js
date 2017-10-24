// Write your Pizza Builder JavaScript in this file.
  $( ".btn-pepperonni" ).on( "click", function() {
    $(this).toggleClass("active");
    if($(".pep").css("display") === "block") {
      $(".pep").css("display", "none");
    } else {
      $(".pep").css("display", "block");
    }
  });
  $( ".btn-mushrooms" ).on( "click", function() {
    $(this).toggleClass("active");
    if($(".mushroom").css("display") === "block") {
      $(".mushroom").css("display", "none");
    } else {
      $(".mushroom").css("display", "block");
    }
  });
  $( ".btn-green-peppers" ).on( "click", function() {
    $(this).toggleClass("active");
    if($(".green-pepper").css("display") === "block") {
      $(".green-pepper").css("display", "none");
    } else {
      $(".green-pepper").css("display", "block");
    }
  });

// Write your Pizza Builder JavaScript in this file.

  $( ".btn-pepperonni" ).on( "click", function() {
    $(this).toggleClass("active");
    if($(".pep").css("display") === "block") {
      $(".pep").css("display", "none");
      $(".price ul li:nth-child(1)").css({display: "none"});
    } else {
      $(".pep").css("display", "block");
      $(".price ul li:nth-child(1)").css({display: "block"});
    }
  });

  $( ".btn-mushrooms" ).on( "click", function() {
    $(this).toggleClass("active");
    if($(".mushroom").css("display") === "block") {
      $(".mushroom").css("display", "none");
      $(".price ul li:nth-child(2)").css({display: "none"});
    } else {
      $(".mushroom").css("display", "block");
      $(".price ul li:nth-child(2)").css({display: "block"});
    }
  });

  $( ".btn-green-peppers" ).on( "click", function() {
    $(this).toggleClass("active");
    if($(".green-pepper").css("display") === "block") {
      $(".green-pepper").css("display", "none");
      $(".price ul li:nth-child(3)").css({display: "none"});
    } else {
      $(".green-pepper").css("display", "block");
      $(".price ul li:nth-child(3)").css({display: "block"});
    }
  });

  $( ".btn-sauce").on( "click", function() {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    if($(this).hasClass("active")) {
      $(".price ul li:nth-child(4)").css({display: "block"});
    } else {
      $(".price ul li:nth-child(4)").css({display: "none"});
    }
  });

  $( ".btn-crust" ).on( "click", function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if($(this).hasClass("active")) {
      $(".price ul li:nth-child(5)").css({display: "block"});
    } else {
      $(".price ul li:nth-child(5)").css({display: "none"});
    }
  });

  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");

  $(".price ul li:nth-child(4)").css({display: "none"});
  $(".price ul li:nth-child(5)").css({display: "none"});

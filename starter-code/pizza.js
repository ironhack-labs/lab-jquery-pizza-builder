// Write your Pizza Builder JavaScript in this file.
$(function(){

  $("button").removeClass("active")
  $(".price li").hide();

  $(".btn-green-peppers").click(function() {
    if (!$("button.btn-green-peppers").hasClass("active")) {
      $("button.btn-green-peppers").addClass("active");
      $("aside.panel li:nth-child(3)").show();
    } else {
        $("button.btn-green-peppers").removeClass("active");
        $("aside.panel li:nth-child(3)").hide();
    }

  })
  $(".btn-pepperonni").click(function() {
    if (!$("button.btn-pepperonni").hasClass("active")) {
      $("button.btn-pepperonni").addClass("active");
      $("aside.panel li:nth-child(1)").show();
    } else {
        $("button.btn-pepperonni").removeClass("active");
        $("aside.panel li:nth-child(1)").hide();
    }
  })

  $(".btn-mushrooms").click(function() {
    if (!$("button.btn-mushrooms").hasClass("active")) {
      $("button.btn-mushrooms").addClass("active");
      $("aside.panel li:nth-child(2)").show();
    } else {
        $("button.btn-pepperonni").removeClass("active");
        $("aside.panel li:nth-child(2)").hide();
    }
  })

  $(".btn-sauce").click(function() {
    if (!$("button.btn-sauce").hasClass("active")) {
      $("button.btn-sauce").addClass("active");
      $("aside.panel li:nth-child(4)").show();
    } else {
        $("button.btn-sauce").removeClass("active");
        $("aside.panel li:nth-child(4)").hide();
    }
  })

  $(".btn-crust").click(function() {
    if (!$("button.btn-crust").hasClass("active")) {
      $("button.btn-crust").addClass("active");
      $("aside.panel li:nth-child(5)").show();
    } else {
        $("button.btn-crust").removeClass("active");
        $("aside.panel li:nth-child(5)").hide();
    }
  })

  // $("button.btn-green-peppers").addClass("active")
  //   $(".green-pepper").toggle();
  //     $("aside.panel li:nth-child(3)").toggle();


  // $(".btn-pepperonni").click(function() {
  //  $(".pep").toggle();
  //   $("aside.panel li:nth-child(1)").toggle();



 //  $(".btn-mushrooms").click(function() {
 //    $(".mushroom").toggle();
 //      $("aside.panel li:nth-child(2)").toggle();
 // })

  // $(".btn-sauce").click(function() {
  //   // $(".crust-gluten-free .sauce-white").toggle();
  //       $("aside.panel li:nth-child(4)").toggle();
  // })

  // $(".btn-crust").click(function() {
  //   // $(".crust-gluten-free").toggle();
  //       $("aside.panel li:nth-child(5)").toggle();
  // })


});

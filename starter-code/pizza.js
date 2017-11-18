// Write your Pizza Builder JavaScript in this file.

// first iteration
$(function() {

  // second iteration
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");

  $("aside.panel strong").text(sumaTotal());

  $(".btn-pepperonni").click(function() {
    $("aside.panel li:nth-child(1)").toggle();
    if ($(this).hasClass("active")) {
      $(".pep").hide();
      $(".btn-pepperonni").removeClass("active");
    } else {
      $(".pep").show();
      $(".btn-pepperonni").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });
  $(".btn-mushrooms").click(function() {
    $("aside.panel li:nth-child(2)").toggle();
    if ($(this).hasClass("active")) {
      $(".mushroom").hide();
      $(".btn-mushrooms").removeClass("active");
    } else {
      $(".mushroom").show();
      $(".btn-mushrooms").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });
  $(".btn-green-peppers").click(function() {
    $("aside.panel li:nth-child(3)").toggle();
    if ($(this).hasClass("active")) {
      $(".green-pepper").hide();
      $(".btn-green-peppers").removeClass("active");
    } else {
      $(".green-pepper").show();
      $(".btn-green-peppers").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });

  $(".btn-sauce").click(function() {

    $("aside.panel li:nth-child(4)").toggle();
    if ($(this).hasClass("active")) {
      $(".sauce").hide();
      $(".btn-sauce").removeClass("active");
    } else {
      $(".sauce").show();
      $(".btn-sauce").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });

  $(".btn-crust").click(function() {

    $("aside.panel li:nth-child(5)").toggle();

    if ($(this).hasClass("active")) {
      $(".cheese").hide();
      $(".btn-crust").removeClass("active");
    } else {
      $(".cheese").show();
      $(".btn-crust").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });


  // Third iteration is already in the first/second one
  // Fourth iteration is already in the first/second one
  // Fifth iteration


});

function sumaTotal() {
  var sum = 10;
  if ($(".btn-pepperoni").hasClass("active")) {
    sum += 1;
  }
  if ($(".btn-mushrooms").hasClass("active")) {
    sum += 1;
  }
  if ($(".btn-green-peppers").hasClass("active")) {
    sum += 1;
  }
  if ($(".btn-sauce").hasClass("active")) {
    sum += 3;
  }
  if ($(".btn-crust").hasClass("active")) {
    sum += 5;
  }
  return sum;
}

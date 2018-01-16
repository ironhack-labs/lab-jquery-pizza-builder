// Write your Pizza Builder JavaScript in this file.
//   if ($(".btn-pepperonni").hasClass("active")) {
//     // $("section[class^='pep ']").css("display", "none");
//     // $(".pep").hide();
//     $(".btn-pepperonni").removeClass("active");
//   } else {
//     // $(".pep").show();
//     $(".btn-pepperonni").addClass("active");
//   }

var price = 13;
// var price =
//   parseInt(
//     $("aside b")
//       .html()
//       .substr(1)
//   ) +
//   parseInt(
//     $("aside ul li:nth-child(1)")
//       .html()
//       .substr(1)
//   ) +
//   parseInt(
//     $("aside ul li:nth-child(2)")
//       .html()
//       .substr(1)
//   ) +
//   parseInt(
//     $("aside ul li:nth-child(3)")
//       .html()
//       .substr(1)
//   ) +
//   parseInt(
//     $("aside ul li:nth-child(4)")
//       .html()
//       .substr(1)
//   ) +
//   parseInt(
//     $("aside ul li:nth-child(5)")
//       .html()
//       .substr(1)
//   );

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("aside ul li:nth-child(1)").toggle();

  if ($(".btn-pepperonni").hasClass("active")) {
    // $("aside ul li:nth-child(1)").show();
    price += parseInt(
      $("aside ul li:nth-child(1)")
        .html()
        .substr(1)
    );
  } else {
    // $("aside ul li:nth-child(1)").hide();
    price -= parseInt(
      $("aside ul li:nth-child(1)")
        .html()
        .substr(1)
    );
  }

  $("aside strong").html("$" + price);
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("aside ul li:nth-child(2)").toggle();

  if ($(".btn-mushrooms").hasClass("active")) {
    // $("aside ul li:nth-child(2)").show();
    price += parseInt(
      $("aside ul li:nth-child(2)")
        .html()
        .substr(1)
    );
  } else {
    // $("aside ul li:nth-child(2)").hide();
    price -= parseInt(
      $("aside ul li:nth-child(2)")
        .html()
        .substr(1)
    );
  }

  $("aside strong").html("$" + price);
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("aside ul li:nth-child(3)").toggle();

  if ($(".btn-green-peppers").hasClass("active")) {
    // $("aside ul li:nth-child(3)").show();
    price += parseInt(
      $("aside ul li:nth-child(3)")
        .html()
        .substr(1)
    );
  } else {
    // $("aside ul li:nth-child(3)").hide();
    price -= parseInt(
      $("aside ul li:nth-child(3)")
        .html()
        .substr(1)
    );
  }

  $("aside strong").html("$" + price);
});

$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");
$("aside ul li:nth-child(4)").hide();
$("aside ul li:nth-child(5)").hide();
$("aside strong").html("$13");

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("aside ul li:nth-child(5)").toggle();

  if ($(".btn-crust").hasClass("active")) {
    // $("aside ul li:nth-child(5)").show();
    price += parseInt(
      $("aside ul li:nth-child(5)")
        .html()
        .substr(1)
    );
  } else {
    // $("aside ul li:nth-child(5)").hide();
    price -= parseInt(
      $("aside ul li:nth-child(5)")
        .html()
        .substr(1)
    );
  }

  $("aside strong").html("$" + price);
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("aside ul li:nth-child(4)").toggle();

  if ($(".btn-sauce").hasClass("active")) {
    // $("aside ul li:nth-child(4)").show();
    price += parseInt(
      $("aside ul li:nth-child(4)")
        .html()
        .substr(1)
    );
  } else {
    // $("aside ul li:nth-child(4)").hide();
    price -= parseInt(
      $("aside ul li:nth-child(4)")
        .html()
        .substr(1)
    );
  }

  $("aside strong").html("$" + price);
});

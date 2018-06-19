// Write your Pizza Builder JavaScript in this file.
$(function() {
  var precio = 10
  $("section").hide();
  $(".crust").show();
  $(".cheese").show();
  $(".sauce").show();
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".price li").hide();
  $(".btn").removeClass("active");
  $("strong").text("$" + precio);
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    if ($(".pep").is(":visible")) {
      $(".pep").hide();
      $(".price li:contains('pepperonni')").hide();
      precio--
      $("strong").text("$" + precio);
    } else {
      $(".pep").show();
      $(".price li:contains('pepperonni')").show();
      precio++
      $("strong").text("$" + precio);
    }
  });

  $(".btn-mushrooms").click(function() {
    $(this).toggleClass("active");
    if ($(".mushroom").is(":visible")) {
      $(".mushroom").hide();
      $(".price li:contains('mushroom')").hide();
      precio--
      $("strong").text("$" + precio);
    } else {
      $(".mushroom").show();
      $(".price li:contains('mushroom')").show();
      precio++
      $("strong").text("$" + precio);
    }
  });

  $(".btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    if ($(".green-pepper").is(":visible")) {
      $(".green-pepper").hide();
      $(".price li:contains('green pepper')").hide();
      precio--
      $("strong").text("$" + precio);
    } else {
      $(".green-pepper").show();
      $(".price li:contains('green pepper')").show();
      precio++
      $("strong").text("$" + precio);
    }
  });

  $(".btn-sauce").click(function() {
    $(this).toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    if ($(".sauce-white").is(":visible")) {
      $(".price li:contains('sauce')").show();
      precio+=3
      $("strong").text("$" + precio);
    } else {
      $(".price li:contains('sauce')").hide();
      precio-=3
      $("strong").text("$" + precio);
    }
  });

  $(".btn-crust").click(function() {
    $(this).toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if ($(".crust-gluten-free").is(":visible")) {
      $(".price li:contains('crust')").show();
      precio+=5
      $("strong").text("$" + precio);
    } else {
      $(".price li:contains('crust')").hide();
      precio-=5
      $("strong").text("$" + precio);
    }
  });

});

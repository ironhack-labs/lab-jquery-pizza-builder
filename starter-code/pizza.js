// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $("li:contains(white sauce)").toggle();
  $(".btn-sauce").toggleClass("active");
  $(".btn-crust").toggleClass("active");
  $("li:contains(gluten-free crust)").toggle();

    var price = $('strong:contains($21)');
    price.html("$13");





    $(".btn-pepperonni").click(function(event) {
      if ($(".btn-pepperonni").prop('class') === "btn btn-pepperonni active") {
        price.html("$" + (parseInt(price.html().slice(1)) - 1));
        $(this).toggleClass("active");
        $("li:contains(pepperonni)").toggle();
        $(".pep").toggle();
      }
      else {
      $(".pep").toggle();
      $(this).toggleClass("active");
      $("li:contains(pepperonni)").toggle();
      price.html("$" + (parseInt(price.html().slice(1)) + 1));
    }
    });


    $(".btn-mushrooms").click(function(event) {
      if ($(".btn-mushrooms").prop('class') === "btn btn-mushrooms active") {
        price.html("$" + (parseInt(price.html().slice(1)) - 1));
        $(this).toggleClass("active");
        $("li:contains(mushrooms)").toggle();
        $(".mushroom").toggle();
      }
      else {
      $(".mushroom").toggle();
      $(this).toggleClass("active");
      $("li:contains(mushrooms)").toggle();
      price.html("$" + (parseInt(price.html().slice(1)) + 1));
    }
    });


    $(".btn-green-peppers").click(function(event) {
      if ($(".btn-green-peppers").prop('class') === "btn btn-green-peppers active") {
        price.html("$" + (parseInt(price.html().slice(1)) - 1));
        $(this).toggleClass("active");
        $("li:contains(green peppers)").toggle();
        $(".peppers").toggle();
      }
      else {
      $(".peppers").toggle();
      $(this).toggleClass("active");
      $("li:contains(green peppers)").toggle();
      price.html("$" + (parseInt(price.html().slice(1)) + 1));
    }
    });


    $(".btn-sauce").click(function(event) {
        if ($(".btn-sauce").prop('class') === "btn btn-sauce active") {
          price.html("$" + (parseInt(price.html().slice(1)) - 3));
          $(this).toggleClass("active");
          $("li:contains(white sauce)").toggle();
          $(".sauce").toggle();
        }
        else {
        $(this).toggleClass("active");
        $("li:contains(white sauce)").toggle();
        price.html("$" + (parseInt(price.html().slice(1)) + 3));
        $(".sauce").toggle();
      }
    });

    $(".btn-crust").click(function(event) {
      if ($(".btn-crust").prop('class') === "btn btn-crust active") {
        price.html("$" + (parseInt(price.html().slice(1)) - 3));
        $(this).toggleClass("active");
        $("li:contains(gluten-free crust)").toggle();
        $(".crust").toggle();
      }
      else {
      $(this).toggleClass("active");
      $("li:contains(gluten-free crust)").toggle();
      price.html("$" + (parseInt(price.html().slice(1)) + 3));
      $(".crust").toggle();
    }
  });
});

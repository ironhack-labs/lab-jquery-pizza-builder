
//ITERACIÓN -1-DONE
$("document").ready(function() {
  $(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    if ($(".pep").css("display") == "block") {
      $(".pep").css("display", "none");
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(1)").css("display", "none");
    } else {
      $(".pep").css("display", "block");
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(1)").css("display", "list-item");
    }
  });

  //ITERACIÓN -1-DONE
  $(".btn-mushrooms.active").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    if ($(".mushroom").css("display") == "block") {
      $(".mushroom").css("display", "none");
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(2)").css("display", "none");
    } else {
      $(".mushroom").css("display", "block");
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(2)").css("display", "list-item");
    }
  });

  //ITERACIÓN -1-DONE
  $(".btn-green-peppers.active").click(function() {
    $(".btn-green-peppers").toggleClass("active");
    if ($(".green-pepper").css("display") == "block") {
      $(".green-pepper").css("display", "none");
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(3)").css("display", "none");
    } else {
      $(".green-pepper").css("display", "block");
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(3)").css("display", "list-item");
    }
  });

  //ITERACIÓN -2-3- DONE - DEFAULT
  $(".btn-sauce").toggleClass("active");
  $(".price li:nth-child(4)").css("display", "none");
  $(".price li:nth-child(5)").css("display", "none");
  $(".sauce").toggleClass("sauce-white");
  $(".btn-crust").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");

  //ITERACIÓN -2-3- DONE
  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    if ($(".sauce").hasClass("sauce-white")) {
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(4)").css("display", "list-item");
    } else {
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(4)").css("display", "none");
    }
  });

  //ITERACIÓN -2-3- DONE
  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    if ($(".btn-crust").hasClass("active")) {
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(5)").css("display", "list-item");
    } else {
      //ITERACIÓN - PRICE - ITERATION 4
      $(".price li:nth-child(5)").css("display", "none");
    }
  });

  //UPDATE-PRICES - ITERATION 5 - Cuando haces click en cualquier botón - Lanzas la función.
  $(".btn").click(function() {
    var price = 10;
    if ($(".btn-pepperonni").hasClass("active")) {
      price += 1;
    }
    if ($(".btn-mushrooms").hasClass("active")) {
      price += 1;
    }
    if ($(".btn-green-peppers").hasClass("active")) {
      price += 1;
    }
    if ($(".btn-sauce").hasClass("active")) {
      price += 3;
    }
    if ($(".btn-crust").hasClass("active")) {
      price += 5;
    }
    $(".price strong").html("$" + price);
  });

  //TOTAL PRICE
  $(".price strong").html("$13");

});

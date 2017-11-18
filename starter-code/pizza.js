// Write your Pizza Builder JavaScript in this file.
$(function() {
  // Remove and add pepperoni
  $(".btn-pepperonni").click(function() {
    totalPrice();
    if ($(this).hasClass("active")) {
      $(".pep").hide();
      $(".btn-pepperonni").removeClass("active");
      $(".panel.price li:contains($1 pepperonni)").hide();
    } else {
      $(".pep").show();
      $(".btn-pepperonni").addClass("active");
      $(".panel.price li:contains($1 pepperonni)").show();
    }
  });
  // Remove and add mushrooms
  $(".btn-mushrooms").click(function() {
    totalPrice();
    if ($(this).hasClass("active")) {
      $(".mushroom").hide();
      $(".btn-mushrooms").removeClass("active");
      $(".panel.price li:contains($1 mushrooms)").hide();
    } else {
      $(".mushroom").show();
      $(".btn-mushrooms").addClass("active");
      $(".panel.price li:contains($1 mushrooms)").show();
    }
  });
  // Remove and add pepperoni
  $(".btn-green-peppers").click(function() {
    totalPrice();
    if ($(this).hasClass("active")) {
      $(".green-pepper").hide();
      $(".btn-green-peppers").removeClass("active");
      $(".panel.price li:contains($1 green peppers)").hide();
    } else {
      $(".green-pepper").show();
      $(".btn-green-peppers").addClass("active");
      $(".panel.price li:contains($1 green peppers)").show();
    }
  });

  // Remove gluten-free and white sauce as default
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  // Remove and add white sauce
  $(".btn-sauce").click(function() {
    totalPrice();
    if ($(this).hasClass("active")) {
      $(".sauce").removeClass("sauce-white");
      $(".btn-sauce").removeClass("active");
      $(".panel.price li:contains($3 white sauce)").hide();
    } else {
      $(".sauce").addClass("sauce-white");
      $(".btn-sauce").addClass("active");
      $(".panel.price li:contains($3 white sauce)").show();
    }
  });
  //Remove and add gluten-free
  $(".btn-crust").click(function() {
    totalPrice();
    if ($(this).hasClass("active")) {
      $(".crust").removeClass("crust-gluten-free");
      $(".btn-crust").removeClass("active");
      $(".panel.price li:contains($5 gluten-free crust)").hide();
    } else {
      $(".crust").addClass("crust-gluten-free");
      $(".btn-crust").addClass("active");
      $(".panel.price li:contains($5 gluten-free crust)").show();
    }
  });

  // add and remove ingredients from price list
  $(".panel.price li:contains($3 white sauce)").hide();
  $(".panel.price li:contains($5 gluten-free crust)").hide();
  totalPrice();

  // Calculate total Price
  function totalPrice(){
    total = 10;
    if($(".btn-pepperonni").hasClass("active")){
      total += 1;
    }
    if($(".btn-mushrooms").hasClass("active")){
      total += 1;
    }
    if($(".btn-green-peppers").hasClass("active")){
      total += 1;
    }
    if($(".btn-sauce").hasClass("active")){
      total += 3;
    }
    if($(".btn-crust").hasClass("active")){
      total += 5;
    }
    $(".panel.price strong").text("$" + total);
    return;
  }

  function obtainPrice(li){
    var price;
    price = li.text
    return
  }


});

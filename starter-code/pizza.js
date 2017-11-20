// Write your Pizza Builder JavaScript in this file.

$(function(){

var priceBase = 10;


  $("button.btn-sauce").removeClass("active")
  $("button.btn-crust").removeClass("active")
  $(".price li:nth-child(4)").hide();
  $(".price li:nth-child(5)").hide();
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");


  $(".btn-green-peppers").click(function() {
    if (!$("button.btn-green-peppers").hasClass("active")) {
      $("button.btn-green-peppers").addClass("active");
      $("aside.panel li:nth-child(3)").show();
      $(".green-pepper").toggle();
      priceText();

    } else {
      $("button.btn-green-peppers").removeClass("active");
      $("aside.panel li:nth-child(3)").hide();
      $(".green-pepper").toggle();
      priceText();
    }

  })
  $(".btn-pepperonni").click(function() {
    if (!$("button.btn-pepperonni").hasClass("active")) {
      $("button.btn-pepperonni").addClass("active");
      $("aside.panel li:nth-child(1)").show();
      $(".pep").toggle();
      priceText();
    } else {
      $("button.btn-pepperonni").removeClass("active");
      $("aside.panel li:nth-child(1)").hide();
      $(".pep").toggle();
      priceText();
    }
  })

  $(".btn-mushrooms").click(function() {
    if (!$("button.btn-mushrooms").hasClass("active")) {
      $("button.btn-mushrooms").addClass("active");
      $("aside.panel li:nth-child(2)").show();
      $(".mushroom").toggle();
      priceText();
    } else {
      $("button.btn-mushrooms").removeClass("active");
      $("aside.panel li:nth-child(2)").hide();
      $(".mushroom").toggle();
      priceText();
    }
  })

  $(".btn-sauce").click(function() {
    // $(this).toggleClass("active");
    // $(".sauce").toggleClass("sauce-white");
    // $("aside.panel li:nth-child(4)").toggle();

    if (!$("button.btn-sauce").hasClass("active")) {
      $("button.btn-sauce").addClass("active");
      $("aside.panel li:nth-child(4)").show();
      $(".sauce").toggleClass("sauce-white");
      priceText();
    } else {
      $("button.btn-sauce").removeClass("active");
      $("aside.panel li:nth-child(4)").hide();
      $(".sauce").toggleClass("sauce-white");
      priceText();
    }
  })

  $(".btn-crust").click(function() {
    if (!$("button.btn-crust").hasClass("active")) {
      $("button.btn-crust").addClass("active");
      $("aside.panel li:nth-child(5)").show();
      $(".crust").toggleClass("crust-gluten-free");
      priceText();

    } else {
      $("button.btn-crust").removeClass("active");
      $("aside.panel li:nth-child(5)").hide();
      $(".crust").toggleClass("crust-gluten-free");
      priceText();
    }
  })

// $(function priceText(){


function priceText(){

  if ($("aside.panel li:nth-child(3)").is(":visible") === true){priceBase +=1
  } else {
    priceBase -=1
  }
  if ($("aside.panel li:nth-child(1)").is(":visible") === true){priceBase +=1
  } else {
    priceBase -=1
  }
  if ($("aside.panel li:nth-child(2)").is(":visible") === true){priceBase +=1
  } else {
    priceBase -=1
  }
  if ($("aside.panel li:nth-child(4)").is(":visible") === true){priceBase +=3
  } else {
    priceBase -=3
  }
  if ($("aside.panel li:nth-child(5)").is(":visible") === true){priceBase +=5
  } else {
    priceBase -=5
  } return priceBase
};

var finalPrice = priceText();

$("aside.price strong").text("$ " + finalPrice);

});

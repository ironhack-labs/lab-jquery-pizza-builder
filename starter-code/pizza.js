// Write your Pizza Builder JavaScript in this file.
console.log("linked");


// var pepperoni;
// var mushrooms;
// var greenPeppers;
// var whiteSauce;
// var gfCrust;
//
// var totalPrice = 10 + pepperoni + mushrooms + greenPeppers + whiteSauce + gfCrust;



$(document).ready(function() {

//Default page state ------------------

var pepperoni = 0;
var mushrooms = 1;
var greenPeppers = 1;
var whiteSauce = 0;
var gfCrust = 0;

function getPrice() {
  var totalPrice = 10 + pepperoni + mushrooms + greenPeppers + whiteSauce + gfCrust;

  $("#final-price").html("$" + totalPrice);
};

getPrice()

//No pepperoni by default
$(".pep").hide();
$(".btn-pepperonni").removeClass("active");
$("#pep").hide();

//No white sauce by default
$(".sauce-white").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$("#sauce-white").hide();

//No gluten free by default
$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$("#gluten-free").hide();


//On click on pepperoni, toggle both picture and ingredient in the list
$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle();
  });

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle();
  });

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  });


//Remove sauce-white

$(".btn-sauce").on("click", function() {
  if ($(".sauce").hasClass("sauce-white")) {
    $(".sauce").removeClass("sauce-white")
  }
  else {
    $(".sauce").addClass("sauce-white");
  }
  });


//Remove gluten free

  $(".btn-crust").on("click", function() {
    if ($(".crust").hasClass("crust-gluten-free")) {
      $(".crust").removeClass("crust-gluten-free");
      $("#gluten-free").hide()
    }
    else {
      $(".crust").addClass("crust-gluten-free");
      $("#gluten-free").show()
    }
    });




// Active Buttons
$(".btn-pepperonni").on("click", function() {
  if ($(".btn-pepperonni").hasClass("active")) {
    $(".btn-pepperonni").removeClass("active");
    $("#pep").hide();
    pepperoni = 0;
    getPrice();
  }
  else {
    ($(".btn-pepperonni").addClass("active"));
    $("#pep").show();
    pepperoni = 1;
    getPrice();
  }
});

$(".btn-mushrooms").on("click", function() {
  if ($(".btn-mushrooms").hasClass("active")) {
    $(".btn-mushrooms").removeClass("active");
    $("#mushroom").hide();
    mushrooms = 0;
    getPrice();
  }
  else {
    $(".btn-mushrooms").addClass("active");
    $("#mushroom").show();
    mushrooms = 1;
    getPrice();
  }
});

$(".btn-green-peppers").on("click", function() {
  if ($(".btn-green-peppers").hasClass("active")) {
    $(".btn-green-peppers").removeClass("active");
    $("#green-pepper").hide();
    greenPeppers = 0;
    getPrice();
  }
  else {
    $(".btn-green-peppers").addClass("active");
    $("#green-pepper").show();
    greenPeppers = 1;
    getPrice();
  }
});

$(".btn-sauce").on("click", function() {
  if ($(".btn-sauce").hasClass("active")) {
    $(".btn-sauce").removeClass("active");
    $("#sauce-white").hide();
    whiteSauce = 0;
    getPrice();
  }
  else {
    ($(".btn-sauce").addClass("active"));
    $("#sauce-white").show();
    whiteSauce = 3;
    getPrice();
  }
});

$(".btn-crust").on("click", function() {
  if ($(".btn-crust").hasClass("active")) {
    $(".btn-crust").removeClass("active");
    $("#gluten-free").hide();
    gfCrust = 0;
    getPrice();
  }
  else {
    $(".btn-crust").addClass("active");
    $("#gluten-free").show();
    gfCrust = 5;
    getPrice();
  }
});

});
// Write your Pizza Builder JavaScript in this file.

var totalPrice = $("strong").html(13);
var newPrice =0;

//Pepperonni button
$(".btn-pepperonni").click(function () {
     $(".pep").toggle();
     $(".price li:contains(pepperonni)").toggleClass("not-displayed");
    //  if ($(".btn-pepperonni").hasClass("active")) {
    //  } else {
    //      newPrice = Number(totalPrice) - 3;
    //      $("strong").html(newPrice);
    //  }
});

//Mushroom button
$(".btn-mushrooms").click(function () {
    $(".mushroom").toggle();
    $(".price li:contains(mushroom)").toggleClass("not-displayed");
});

//Green pepper
$(".btn-green-peppers").click(function () {
    $(".green-pepper").toggle();
    $(".price li:contains(peppers)").toggleClass("not-displayed");
});



// Removing default values
$(document).ready(function() {
    $(".crust-gluten-free").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".sauce-white").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $(".price li:contains(crust)").addClass("not-displayed");
    $(".price li:contains(white)").addClass("not-displayed");
  });

// Gluten-free crust
$(".btn-crust").click(function () {
    if ($(".crust").hasClass("crust-gluten-free")) {
        $(".crust").removeClass("crust-gluten-free"); 
    } else {
    $(".crust").addClass("crust-gluten-free");
    }
    $(".price li:contains(crust)").toggleClass("not-displayed");
});

// //White sauce
$(".btn-sauce").click(function () {
    if ($(".sauce").hasClass("sauce-white")) {
        $(".sauce").removeClass("sauce-white"); 
    } else {
    $(".sauce").addClass("sauce-white");
    }
    $(".price li:contains(white)").toggleClass("not-displayed");
});

// active classes on click
$(".btn").click(function () {
    var clickedBtn = this;
    $(clickedBtn).toggleClass("active")
});




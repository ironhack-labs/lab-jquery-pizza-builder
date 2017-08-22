// Write your Pizza Builder JavaScript in this file.


$( document ).ready(function() {

  var totalPrice = 13;
  $("strong").html("$ " + totalPrice);
  console.log(totalPrice);


  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("#price-list li:last").toggle();
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("#price-list li:nth(3)").toggle();

  $(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $("#price-list li:first").toggle();
    if ($(".btn-pepperonni").hasClass("active")){
      console.log("I have active class");
      totalPrice += 1;
      console.log(totalPrice);
      $("strong").html("$ " + totalPrice);

    }
    else {
      totalPrice -= 1;
      console.log(totalPrice);
      $("strong").html("$ " + totalPrice);
    }

  });

  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $("#price-list li:nth(1)").toggle();
    if ($(".btn-green-peppers").hasClass("active")){
      console.log("I have active class");
      totalPrice += 1;
      $("strong").html("$ " + totalPrice);
    }
    else {
      totalPrice -= 1;
      $("strong").html("$ " + totalPrice);
    }
  });

  $(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $("#price-list li:nth(2)").toggle();
    if ($(".btn-mushrooms").hasClass("active")){
      console.log("I have active class");
      totalPrice += 1;
      $("strong").html("$ " + totalPrice);
    }
    else {
      totalPrice -= 1;
      $("strong").html("$ " + totalPrice);
    }

  });

  $(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $("#price-list li:last").toggle();
    if ($(".btn-crust").hasClass("active")){
      console.log("I have active class");
      totalPrice += 5;
      $("strong").html("$ " + totalPrice);
    }
    else {
      totalPrice -= 5;
      $("strong").html("$ " + totalPrice);
    }

  });

  $(".btn-sauce").on("click", function() {
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $("#price-list li:nth(3)").toggle();
    // checkPrice(this);
    if ($(".btn-sauce").hasClass("active")){
      console.log("I have active class");
      totalPrice += 3;
      $("strong").html("$ " + totalPrice);
    }
    else {
      totalPrice -= 3;
      $("strong").html("$ " + totalPrice);
    }

  });



//   function checkPrice ($element) {
//
//   if ($element.hasClass("active")){
//     console.log("I have active class");
//     totalPrice += 3;
//     $("strong").html("$ " + totalPrice);
//   }
//   else {
//     totalPrice -= 3;
//     $("strong").html("$ " + totalPrice);
//   }
// }
  // function checkPrice ($element) {
  //   if ($element.hasClass("active")){
  //     console.log("I have active class");
  //   }
  // }

// if ($(".btn-pepperonni").hasClass("active")){
//   console.log("I have active class");
//   totalPrice += 1;
//   console.log(totalPrice);
// }
// else {
//   totalPrice -= 1;
//   console.log(totalPrice);
// }

  // checkPrice("button-crust");

});




// btn-crust

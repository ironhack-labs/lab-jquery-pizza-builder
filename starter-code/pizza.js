// Write your Pizza Builder JavaScript in this file.
window.onload = function(){
  $(".price ul li:nth-child(4)").hide()
  $(".price ul li:nth-child(5)").hide()
};

var totalPrice = 13;

$(".btn-pepperonni").click(function() {
  $(".pep").toggleClass("toggleDisplay");
  $(this).toggleClass("active");
  if ($(this).hasClass("active") === false){
    $(".price ul li:first-child").hide();
    totalPrice -= 1;
  }
    else {
      $(".price ul li:first-child").show();
      totalPrice += 1;
    }
  $("#finalPrice").html("$" + totalPrice);
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggleClass("toggleDisplay");
  $(this).toggleClass("active");
  if ($(this).hasClass("active") === false){
    $(".price ul li:nth-child(2)").hide();
    totalPrice -= 1;
  }
    else {
      $(".price ul li:nth-child(2)").show();
      totalPrice += 1;
    }
  $("#finalPrice").html("$" + totalPrice);
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggleClass("toggleDisplay");
  $(this).toggleClass("active");
  if ($(this).hasClass("active") === false){
    $(".price ul li:nth-child(3)").hide();
    totalPrice -= 1;
  }
    else {
      $(".price ul li:nth-child(3)").show();
      totalPrice += 1;
    }
  $("#finalPrice").html("$" + totalPrice);
});

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
  if ($(this).hasClass("active") === false){
    $(".price ul li:nth-child(4)").hide();
    totalPrice -= 3;
  }
    else {
      $(".price ul li:nth-child(4)").show();
      totalPrice += 3;
    }
  $("#finalPrice").html("$" + totalPrice);
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  if ($(this).hasClass("active") === false){
    $(".price ul li:nth-child(5)").hide();
    totalPrice -= 5;
  }
    else {
      $(".price ul li:nth-child(5)").show();
      totalPrice += 5;
    }
  $("#finalPrice").html("$" + totalPrice);
});



// $(".btn").click(function() {
//   $(this).toggleClass("active");
// });

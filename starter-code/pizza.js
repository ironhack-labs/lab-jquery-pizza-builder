var totalPrice = 13;

$(".white-sauce-list").toggle("white-sauce-list");

$(".gluten-list").toggle("gluten-list");
$;
$(".btn-green-peppers").click(function() {
  $(".btn-green-peppers").toggleClass("active");
  $("#pizza .green-pepper").toggle("green-pepper");
  $(".peppers-list").toggle("peppers-list");
  var isGreen = $(".btn-green-peppers").hasClass("active");
  if (isGreen) {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
  displayFinal();
});

$(".btn-pepperonni").click(function() {
  $(".btn-pepperonni").toggleClass("active");
  $("#pizza .pep").toggle("pep");
  $(".pep-list").toggle("pep-list");
  var isPep = $(".btn-pepperonni").hasClass("active");
  if (isPep) {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
  }
  displayFinal();
});

$(".btn-mushrooms").click(function() {
  $(".btn-mushrooms").toggleClass("active");
  $("#pizza .mushroom").toggle("mushroom");
  $(".mushroom-list").toggle("mushroom-list");
  var isMush = $(".btn-mushrooms").hasClass("active");
  if (isMush) {
    totalPrice += 1;
  } else {
    totalPrice -= 1;
    console.log(totalPrice);
  }
  displayFinal();
});

function sauceSwitch() {
  var isWhite = $(".sauce").hasClass("white");

  if (isWhite) {
    $(".sauce").removeClass("white");
    $(".white-sauce-list").toggle("white-sauce-list");
    totalPrice -= 3;
  } else {
    $(".sauce").addClass("white");
    totalPrice += 3;
    $(".white-sauce-list").toggle("white-sauce-list");
  }
}
$(".btn-sauce").click(function() {
  sauceSwitch();
  $(".btn-sauce").toggleClass("active");
  displayFinal();
});

function crustSwitch() {
  var isGluten = $(".crust").hasClass("gluten-free");

  if (isGluten) {
    $(".crust").removeClass("gluten-free");
    $(".gluten-list").toggle("gluten-list");
    totalPrice -= 5;
  } else {
    $(".crust").addClass("gluten-free");
    $(".gluten-list").toggle("gluten-list");
    totalPrice += 5;
  }
  displayFinal();
}
$(".btn-crust").click(function() {
  crustSwitch();
  $(".btn-crust").toggleClass("active");
  displayFinal();
});

function displayFinal() {
  $(".final-price").text("$" + totalPrice);
}
displayFinal();

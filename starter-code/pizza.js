var $defaultPrice = 13;

function $replacePrice() {
  $("strong").text("$" + $defaultPrice);
};

function $displayGreenPepper() {
  $(".btn-green-peppers").click(function() {
  $("li:contains('green peppers')").toggle();
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  if ($(".btn-green-peppers").hasClass("active")){
    $defaultPrice += 1;
} else {
    $defaultPrice -= 1;
}
  $replacePrice();})
};

function $displayMushroom() {
  $(".btn-mushrooms").click(function() {
  $("li:contains('mushrooms')").toggle();
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  if ($(".btn-mushrooms").hasClass("active")){
    $defaultPrice += 1;
} else {
    $defaultPrice -= 1;
}
  $replacePrice();})
};

function $displayPep() {
  $(".btn-pepperonni").click(function() {
  $("li:contains('pepperonni')").toggle();
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  if ($(".btn-pepperonni").hasClass("active")){
    $defaultPrice += 1;
} else {
    $defaultPrice -= 1;
}
  $replacePrice();})
};

function $displaySauce() {
  $(".sauce").removeClass("sauce-white")
  $(".btn-sauce").removeClass("active");
  $("li:contains('white')").hide();
  $(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains('white')").toggle();
  if ($(".btn-sauce").hasClass("active")){
    $defaultPrice += 3;
} else {
    $defaultPrice -= 3;
}
  $replacePrice();})
};

function $displayCrust() {
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $("li:contains('gluten')").hide();
  $(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains('gluten')").toggle();
  if ($(".btn-crust").hasClass("active")){
    $defaultPrice += 5;
} else {
    $defaultPrice -= 5;
}
  $replacePrice();})
};


$(document).ready(function() {
  $replacePrice();
  $displayGreenPepper();
  $displayMushroom();
  $displayPep();
  $displaySauce();
  $displayCrust();

});
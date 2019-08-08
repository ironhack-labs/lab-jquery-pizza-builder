// Write your Pizza Builder JavaScript in this file.
var allWithPepperoni = 1;
var allWithMushroom = 1;
var allWithGreenPepper = 1;
var withWhiteSauce = 0;
var withCrustGluten = 0;
var price = 13;

function updatePrice() {
  $("strong").text(price);
}

function init() {
  $(".crust").toggleClass("crust-gluten-free");
  $("#btn-sauce").toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  $("#btn-crust").toggleClass("active");
  $("li:contains(white)").hide();
  $("li:contains(gluten)").hide();
  updatePrice();
}

init();

const btnGreenPepper = $("#btn-green-peppers").on("click", () => {
  if (allWithGreenPepper == 1) {
    $(".green-pepper").toggleClass("green-pepper-off");
    $(".green-pepper-off").toggleClass("green-pepper");
    $("#btn-green-peppers").toggleClass("active");
    $("li:contains(green)").hide();
    price -= 1;
    updatePrice();
    allWithGreenPepper = 0;
  } else {
    $(".green-pepper-off").toggleClass("green-pepper");
    $(".green-pepper").toggleClass("green-pepper-off");
    $("#btn-green-peppers").toggleClass("active");
    $("li:contains(green)").show();
    price += 1;
    updatePrice();
    allWithGreenPepper = 1;
  }
  // let pepperoni = $(".green-pepper-off");
  // console.log(pepperoni);
});

const btnMushroom = $("#btn-mushrooms").on("click", () => {
  if (allWithMushroom == 1) {
    $(".mushroom > div:nth-child(1)").toggleClass("cap-off");
    $(".mushroom > div:nth-child(2)").toggleClass("stem-off");
    $(".cap-off").toggleClass("cap");
    $(".stem-off").toggleClass("stem");
    $("#btn-mushrooms").toggleClass("active");
    $("li:contains(mush)").hide();
    price -= 1;
    updatePrice();
    allWithMushroom = 0;
  } else {
    $(".cap-off").toggleClass("cap");
    $(".stem-off").toggleClass("stem");
    $(".mushroom > div:nth-child(1)").toggleClass("cap-off");
    $(".mushroom > div:nth-child(2)").toggleClass("stem-off");
    $("#btn-mushrooms").toggleClass("active");
    $("li:contains(mush)").show();
    price += 1;
    updatePrice();
    allWithMushroom = 1;
  }
});

const btnPepperoni = $("#btn-pepperonni").on("click", () => {
  let peps = $(".pep");
  if (allWithPepperoni == 1) {
    peps.hide();
    $("#btn-pepperonni").toggleClass("active");
    $("li:contains(pepperonni)").hide();
    price -= 1;
    updatePrice();
    allWithPepperoni = 0;
  } else {
    peps.show();
    $("#btn-pepperonni").toggleClass("active");
    $("li:contains(pepperonni)").show();
    price += 1;
    updatePrice();
    allWithPepperoni = 1;
  }

  // console.log(pepContainer);
});

const btnSauce = $("#btn-sauce").on("click", () => {
  if (withWhiteSauce == 1) {
    withWhiteSauce = 0;
    $("li:contains(white)").hide();
    price -= 3;
    updatePrice();
  } else {
    withWhiteSauce = 1;
    $("li:contains(white)").show();
    price += 3;
    updatePrice();
  }
  $(".sauce").toggleClass("sauce-white");
  $("#btn-sauce").toggleClass("active");
});

const btnCrust = $("#btn-crust").on("click", () => {
  if (withCrustGluten == 1) {
    withCrustGluten = 0;
    $("li:contains(gluten)").hide();
    price -= 5;
    updatePrice();
  } else {
    withCrustGluten = 1;
    $("li:contains(gluten)").show();
    price += 5;
    updatePrice();
  }
  $(".crust").toggleClass("crust-gluten-free ");
  $("#btn-crust").toggleClass("active");
});

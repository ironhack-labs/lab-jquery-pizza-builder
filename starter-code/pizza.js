// Write your Pizza Builder JavaScript in this file.

//////////////////Pepperonni =============================

//toggles btwn pepperoni and not pepperoni
$(".btn-pepperonni").on("click", event => $("section.pep").toggle());

//changes button effects by toggling active class
$(".btn-pepperonni").on("click", event =>
  $("button.btn-pepperonni").toggleClass("active")
);

/////////////////Mushrooms ===============================

//toggles btwn mushrooms and not mushrooms
$(".btn-mushrooms").on("click", event =>
  $("section.mushroom")
    .children()
    .toggle()
);

//changes button effects by toggling active class
$(".btn-mushrooms").on("click", event =>
  $("button.btn-mushrooms").toggleClass("active")
);

///////////////////Green Peppers ===============================
$(".btn-green-peppers").on("click", event =>
  $("section.green-pepper").toggle()
);

//changes button effects by toggling active class
$(".btn-green-peppers").on("click", event =>
  $("button.btn-green-peppers").toggleClass("active")
);

///////////////////Crust ===============================

//trying to get it to default remove class.  DOES NOTE WORK.
$(".btn.crust").removeClass("active");
$(".section.crust").removeClass("crust-gluten-free");

$(".btn-crust").on("click", event =>
  $("section.crust").toggleClass("crust-gluten-free")
);

//changes button effects by toggling active class
$(".btn-crust").on("click", event =>
  $("button.btn-crust").toggleClass("active")
);

//////////////////////White Sauce ===============================

//trying to get it to default remove class. DOES NOT WORK!!!

$(window).on("load", function() {
  $(".btn.sauce").removeClass("active");
  console.log("Load Sauce active working");
});

$(window).on("load", function() {
  $(".btn.sauce").removeClass("white-sauce");
  console.log("Load Sauce working");
});

// toggles sauce class image from pizza
$(".btn-sauce").on("click", event => $("section.sauce").toggle("sauce-white"));

//changes button effects by toggling active class
$(".btn-sauce").on("click", event =>
  $("button.btn-sauce").toggleClass("active")
);

/////////////// PRICES

//toggles the item out of the price list on click.
$(".btn-pepperonni").on("click", event =>
  $("li:contains('pepperonni')").toggle()
);

$(".btn-mushrooms").on("click", event =>
  $("li:contains('mushrooms')").toggle()
);

$(".btn-green-peppers").on("click", event =>
  $("li:contains('green peppers')").toggle()
);

$(".btn-sauce").on("click", event => $("li:contains('white sauce')").toggle());

$(".btn-crust").on("click", event =>
  $("li:contains('gluten-free crust')").toggle()
);

//////////// TOTAL PRICE
function totalPrice() {
  let totalPrice = 10;
  if ($(".btn-pepperonni").hasClass("active")) {
    totalPrice += 1;
  }
  if ($(".btn-mushrooms").has("active")) {
    totalPrice += 1;
  }
  if ($(".btn-green-peppers").has("active")) {
    totalPrice += 1;
  }
  if ($(".btn-sauce").has("active")) {
    totalPrice += 3;
  }
  if ($(".btn-crust").has("active")) {
    totalPrice += 5;
  }
}

$(".btn").on("click", event => $("strong").text("$" + totalPrice));

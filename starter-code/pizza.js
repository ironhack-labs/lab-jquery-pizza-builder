// Write your Pizza Builder JavaScript in this file.

/////////////// -- Almost done.  I can't get the sauce and crust to not be active upon loading the page.  Also the prices aren't adding up correctly.

$(window).on("load", function() {
  $(".btn.sauce").toggleClass("active");
  console.log("Load Sauce active working");
  $(".btn.sauce").toggleClass("white-sauce");
  console.log("Load Sauce working");
  $(".btn.crust").toggleClass("active");
  $(".section.crust").toggleClass("crust-gluten-free");
});

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

$(".btn-crust").on("click", event =>
  $("section.crust").toggleClass("crust-gluten-free")
);

//changes button effects by toggling active class
$(".btn-crust").on("click", event =>
  $("button.btn-crust").toggleClass("active")
);

//////////////////////White Sauce ===============================

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
  let price = 10;
  if ($(".btn-pepperonni").hasClass("active")) {
    price += 1;
  }
  if ($(".btn-mushrooms").has("active")) {
    price += 1;
  }
  if ($(".btn-green-peppers").has("active")) {
    price += 1;
  }
  if ($(".btn-sauce").has("active")) {
    price += 3;
  }
  if ($(".btn-crust").has("active")) {
    price += 5;
  }
}

// $(".btn").on("click", event, totalPrice => $("strong").text("$" +));

$(".btn").on("click", event => $("strong").text("$" + "price"));

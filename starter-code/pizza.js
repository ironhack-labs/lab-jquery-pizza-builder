


function updatePrice() {
  var basePrice = 10;
  if ($(".btn-pepperonni").hasClass("active")) {
    basePrice += 1;
  }
  if ($(".btn-mushrooms").hasClass("active")) {
    basePrice += 1;
  }
  if ($(".btn-green-peppers").hasClass("active")) {
    basePrice += 1;
  }
  if ($(".btn-crust").hasClass("active")) {
    basePrice += 5;
  }
  if ($(".btn-sauce").hasClass("active")) {
    basePrice += 3;
  }

  $("strong").text("$" + basePrice)
}


$(".btn-pepperonni").click(function () {
  console.log("Pepperoni btn clicked!");
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains(pepperonni)").toggle();
  updatePrice()
})

$(".btn-green-peppers").click(function () {
  console.log("green peppers btn clicked!");
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains(green peppers)").toggle();
  updatePrice()
})

$(".btn-mushrooms").click(function () {
  console.log("mushroom btn clicked!");
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains(mushrooms)").toggle();
  updatePrice()
})


/* -- Iteration 2-------------- ------------------- */
$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").removeClass("active");
$("li:contains(gluten-free crust)").hide();

$(".btn-crust").click(function () {
  $(".btn-crust").toggleClass("active");
  console.log("Gluten free crust btn clicked!")
  $(".crust").toggleClass("crust-gluten-free")
  $("li:contains(gluten-free crust)").toggle();
  updatePrice()
})


$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$("li:contains(white sauce)").hide();

$(".btn-sauce").click(function () {
  console.log("Gluten free crust btn clicked!")
  $(".sauce").toggleClass("sauce-white")
  $(".btn-sauce").toggleClass("active");
  $("li:contains(white sauce)").toggle();
  updatePrice()
})

updatePrice();

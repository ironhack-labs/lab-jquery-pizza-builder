// $(".pep").toggle()
// $(".green-pepper").toggle();
// $(".mushroom").toggle();
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
// $(".btn-pepperonni").removeClass("active");
// $(".btn-green-peppers").removeClass("active");
// $(".btn-mushrooms").removeClass("active");
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");
$(".price li:nth-child(4)").toggle();
$(".price li:nth-child(5)").toggle();

let realValue = 10;


function finalPrice() {
  if ($(".btn-pepperonni").hasClass("active")) {
    realValue += 1;
  } else {realValue -=1};

  if ($(".btn-green-pepper").hasClass("active")) {
    realValue += 1
  } else {realValue -=1};

  if ($(".btn-mushrooms").hasClass("active")) {
    realValue += 1;
  } else {realValue -=1};

  if ($(".btn-sauce").hasClass("active")) {
    realValue += 3;
  } else {realValue -=3};

  if ($(".btn-crust").hasClass("active")) {
    realValue += 5;
  } else {realValue -=5};
}

$("strong").html("$" + realValue);


$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price li:first-child").toggle();
})

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price li:nth-child(3)").toggle();
})

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price li:nth-child(2)").toggle();
})

$(".btn-crust").on("click", function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".price li:nth-child(5)").toggle();
})

$(".btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".price li:nth-child(4)").toggle();
})

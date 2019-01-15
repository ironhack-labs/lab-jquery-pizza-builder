// Write your Pizza Builder JavaScript in this file.
var liArr = [];
liArr = $("aside.panel.price ul li");

$(".btn-pepperonni").on("click", function () {
  $(".pep").toggle();
  $(this).toggleClass("active");
})

$(".btn-mushrooms").on("click", function () {
  $(".mushroom").toggle();
  $(this).toggleClass("active");
})

$(".btn-green-peppers").on("click", function () {
  $(".green-pepper").toggle();
  $(this).toggleClass("active");
})

$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");

$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");

$(".btn-sauce").on("click", function () {
  $(".sauce").toggleClass("sauce-white");
  $(this).toggleClass("active");
})

$(".btn-crust").on("click", function () {
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
})

$(".panel.price").children("li")



function updatePrice() {

}
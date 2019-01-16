// Write your Pizza Builder JavaScript in this file.


// pre-set pour mettre par défaut en actif ou non (boutton), et en visible ou non (ligne avec prix)
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");
$(".price").find("li:contains('white')")
  .toggle();
$(".price").find("li:contains('gluten')")
  .toggle();


// fonction pour faire apparaitre ou disparaitre les aliments 
function changeTopping(newClass) {
  $(newClass).toggle();
};

// au click sur le btn pepperonni ...
$(".btn-pepperonni").click(function () {
  changeTopping(".pep"); // -> on appelle la fonction ci dessus pour switcher la class "pep" qui fait apparaitre et disparaitre les pepperonni
  $(".btn-pepperonni").toggleClass("active") // -> on rend le btn actif en switchant la class "active"
  $(".price").find("li:contains('pepperonni')")
    .toggle(); // -> dans Price on trouve le li qui contient "pepperonni" pour switcher la ligne complete idem ci dessus.
  panelControl();
});

$(".btn-green-peppers").click(function () {
  changeTopping(".green-pepper");
  $(".btn-green-peppers").toggleClass("active");
  $(".price").find("li:contains('green')")
    .toggle();
});

$(".btn-mushrooms").click(function () {
  changeTopping(".mushroom");
  $(".btn-mushrooms").toggleClass("active");
  $(".price").find("li:contains('mushroom')")
    .toggle();
});

$(".btn-sauce").click(function () {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".price").find("li:contains('white')")
    .toggle();
});

$(".btn-crust").click(function () {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".price").find("li:contains('gluten')")
    .toggle();
});


//----Total Price -----

var totalPriceArr = ["10"];
var totalPrice = $(".strong");
var itemPriceArr = [];
var itemPrice = $(".price li");

// var panelControl.forEach(function (oneTopping) {
//   if (oneTopping.hasClass("active")) {
//     console.log("coucou toppingitem");
//   } else {
//     console.log("sa mere");
//   }

// });
// Write your Pizza Builder JavaScript in this file.

//click button listener 
$(".price li").remove();
$(".btn").removeClass("active");
$(".pep").text("");
$(".cap").text("");
$(".pep").addClass("empty-class1").removeClass("pep");
$(".green-pepper").addClass("empty-class2").removeClass("green-pepper");
$(".mushroom").addClass("empty-class3").removeClass("mushroom");
$(".cap").addClass("empty-class4").removeClass("cap");
$(".stem").addClass("empty-class5").removeClass("stem");

var totalPrice = 10;
$('strong').text('$' + totalPrice);
function findTotal(itemPrice) {
  totalPrice += itemPrice;
  $('strong').text('$' + totalPrice);
}


$(".btn-pepperonni").on("click", pepperonniClick);
function pepperonniClick() {
  var itemPrice = 1;
  $(".empty-class1").toggleClass("pep");
  $(this).toggleClass("active");
  $(".price ul").append("<li>$1 pepperonni</li>");
  findTotal(itemPrice);

}

$(".btn-green-peppers").on("click", pepperClick);
function pepperClick() {
  var itemPrice = 1;
  $(".empty-class2").toggleClass("green-pepper");
  $(this).toggleClass("active");
  $(".price ul").append("<li>$1 green peppers</li>"); 
  findTotal(itemPrice);
}

$(".btn-mushrooms").on("click", mushClick);
function mushClick() {
  var itemPrice = 1;
  $(".empty-class3").toggleClass("mushroom");
  $(".empty-class4").toggleClass("cap");
  $(".empty-class5").toggleClass("stem");
  $(this).toggleClass("active");
  $(".price ul").append("<li>$1 mushrooms</li>"); 
  findTotal(itemPrice);
}

//initialize the pizza with normal crust taking out the crust-gluten-free class

$(".crust").removeClass("crust-gluten-free");
$(".btn-crust").on("click", glutenClick);
function glutenClick() {
  var itemPrice = 5;
  $(".crust").toggleClass("crust-gluten-free");
  $(this).toggleClass("active");
  $(".price ul").append("<li>$5 gluten-free crust</li>"); 
  findTotal(itemPrice);
}

//remove sauce white class first
$(".sauce").removeClass("sauce-white");
$(".btn-sauce").on("click", sauceClick);


//if the button has class active, it has to remove an li
function sauceClick() {
  var itemPrice = 3;
  $(this).toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  findTotal(itemPrice);
}








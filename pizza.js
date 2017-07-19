// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

//DEFULT SETTINGS//

$(".crust.crust-gluten-free").removeClass("crust-gluten-free");
$(".btn.btn-crust.active").toggleClass("active");
$(".sauce.sauce-white").removeClass("sauce-white");
$(".btn.btn-sauce.active").removeClass("active");
$("aside ul li:nth-child(5)").css("visibility", "hidden");
$("aside ul li:nth-child(4)").css("visibility", "hidden");


//BUTTONS//
$(".btn.btn-pepperonni").on("click", function () {
  $(".btn.btn-pepperonni").toggleClass("active");
});
$(".btn-mushrooms").on("click", function () {
  $(".btn-mushrooms").toggleClass("active");

});
$(".btn.btn-green-peppers.active").on("click", function () {
  $(".btn.btn-green-peppers").toggleClass("active");

});


//CRUST//
$(".btn.btn-crust").on("click", function (){

if (!$(".btn.btn-crust").hasClass("active")){

  $("aside ul li:nth-child(5)").css("visibility", "visible");

} else if ($(".btn.btn-crust").hasClass("active")){

  $("aside ul li:nth-child(5)").css("visibility", "hidden");
}
$("section.crust").toggleClass("crust-gluten-free");
$(".btn.btn-crust").toggleClass("active");
finalPrice($(this),crust);
});

//SAUCE//
$(".btn.btn-sauce").on ("click", function(){

  if (!$(".btn.btn-sauce").hasClass("active")){

    $("aside ul li:nth-child(4)").css("visibility", "visible");

  } else if ($(".btn.btn-sauce").hasClass("active")){

    $("aside ul li:nth-child(4)").css("visibility", "hidden");
  }

  $("section.sauce").toggleClass("sauce-white");
  $(".btn.btn-sauce").toggleClass("active");
  finalPrice($(this),sauce);
});


//PEPPERONNI//
$(".btn.btn-pepperonni.active").on("click", function(){
  if ($(".btn.btn-pepperonni").hasClass("active")){

    $("aside ul li:nth-child(1)").css("visibility", "visible");

  } else if (!$(".btn.btn-pepperonni").hasClass("active")){

    $("aside ul li:nth-child(1)").css("visibility", "hidden");
  }
if ($("#pizza section.pep").css("visibility")==="visible"){
  $("#pizza section.pep").css("visibility", "hidden");
  $(".btn.btn-pepperonni.active").removeClass("active");
}
else{ $("#pizza section.pep").css("visibility", "visible");
$(".btn.btn-pepperonni").addClass("active");

}
finalPrice($(this),pep);
});
//MUSHROOM//
$(".btn.btn-mushrooms.active").on("click", function(){
  if ($(".btn.btn-mushrooms").hasClass("active")){

    $("aside ul li:nth-child(2)").css("visibility", "visible");

  } else if (!$(".btn.btn-mushrooms").hasClass("active")){

    $("aside ul li:nth-child(2)").css("visibility", "hidden");
  }

if ($("#pizza section.mushroom").css("visibility")==="visible"){
  $("#pizza section.mushroom").css("visibility", "hidden");
  $(".btn.btn-mushrooms.active").removeClass("active");
}
else{ $("#pizza section.mushroom").css("visibility", "visible");
$(".btn.btn-mushroom").addClass("active");
}
finalPrice($(this),mush);
});
//PEPPERs//
$(".btn.btn-green-peppers.active").on("click", function(){
  if ($(".btn.btn-green-peppers").hasClass("active")){

    $("aside ul li:nth-child(3)").css("visibility", "visible");

  } else if (!$(".btn.btn-green-peppers").hasClass("active")){

    $("aside ul li:nth-child(3)").css("visibility", "hidden");
  }

if ($("section.green-pepper").css("visibility")==="visible"){
  $("#pizza section.green-pepper").css("visibility", "hidden");
  $(".btn.btn-green-peppers.active").removeClass("active");
}
else{ $("#pizza section.green-pepper").css("visibility", "visible");
$(".btn.btn-green-pepper").addClass("active");
}
finalPrice($(this),pepper);
});


var pizza=10;
var pep=1;
var mush=1;
var pepper=1;
var sauce=3;
var crust=5;
var totalPrice= pizza+mush+pepper+pep;
console.log(totalPrice);


function finalPrice(topping, topPrice) {
  if (topping.hasClass("active")) {
   totalPrice +=topPrice;
    console.log(topPrice);

  }else if (!($(topping).hasClass("active"))) {
    totalPrice-=topPrice;

  }
  $("strong").text("$"+ totalPrice);

}






});

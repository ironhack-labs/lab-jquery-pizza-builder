
$(document).ready(function() {

  // Your code here.



// -----works-----
$(".crust.crust-gluten-free").removeClass("crust-gluten-free");
$(".btn.btn-crust.active").toggleClass("active");
$(".sauce.sauce-white").removeClass("sauce-white");
$(".btn.btn-sauce.active").toggleClass("active");
$("aside.panel.price ul li").eq(4).css("visibility", "hidden");
$("aside.panel.price ul li").eq(3).css("visibility", "hidden");
// -----works-----
// ----PIZZA PRICES----
var pizza = 10;
var pep = 1;
var mush = 1;
var gree = 1;
var glut = 5;
var whit = 3;
var subtotal = [pizza, pep, mush, gree];
console.log(subtotal);
var total = subtotal.reduce(function(sum, value){
  return sum + value;
}, 0);

// var total = subtotal.reduce(add, 0);
// function add(a, b) {
//   return a + b;
// }
//
// function getPizzaPrice(){
// // var subtotal = [];
//  for (var i = 0; i < subtotal.length; i++) {
//  var pizzaPricevalue = parseFloat($("aside.panel.price strong").html("$"+total));
//  subtotal.push(pizzaPricevalue);
//
// }
// var realtotal = subtotal.reduce(total, 0);
// $("aside.panel.price strong").html= realtotal;
// }
//
// console.log(total);




// -----WHITE SAUCE / RED SAUCE TOGGLE-----
$(".btn.btn-sauce").on("click", function(){
  // var total = 10;
  // var whiteSauce = 3;
  console.log("btn sauce");
$("section.sauce").toggleClass("sauce-white");
$(".btn.btn-sauce").toggleClass("active");
if($("aside.panel.price ul li").eq(3).css("visibility")==="hidden"){
  $("aside.panel.price ul li").eq(3).css("visibility", "visible");
  subtotal.push(whit);
  console.log(subtotal);
  total = subtotal.reduce(function(sum, value){
    return sum + value;
  }, 0);
$("aside.panel.price strong").html("$" + total);
} else {
$("aside.panel.price ul li").eq(3).css("visibility", "hidden");
var index = subtotal.indexOf(3);
subtotal.splice(index, 1);
console.log(subtotal);
total = subtotal.reduce(function(sum, value){
  return sum + value;
}, 0);
$("aside.panel.price strong").html("$" + total);
}
});
// -----works-----

// -----CRUST TOGGLE-----
$(".btn.btn-crust").on("click", function(){
  console.log("btn sauce");
$("section.crust").toggleClass("crust-gluten-free");
$(".btn.btn-crust").toggleClass("active");
if($("aside.panel.price ul li").eq(4).css("visibility")==="hidden"){
  $("aside.panel.price ul li").eq(4).css("visibility", "visible");
  subtotal.push(glut);
  total = subtotal.reduce(function(sum, value){
    return sum + value;
  }, 0);
$("aside.panel.price strong").html("$" + total);
} else {
$("aside.panel.price ul li").eq(4).css("visibility", "hidden");
var index = subtotal.indexOf(5);
subtotal.splice(index, 1);
total = subtotal.reduce(function(sum, value){
  return sum + value;
}, 0);
$("aside.panel.price strong").html("$" + total);
}
});
// -----works-----

// -----GIVE TOPPINGS CSS: VISIBILITY CLASS-------------
$("#pizza section.green-pepper").css("visibility", "visible");
$("#pizza section.pep").css("visibility", "visible");
$("#pizza section.mushroom").css("visibility", "visible");
// --------------------------------------------------------------

// ---------GREEN PEPPERS SHOW / HIDE --------
$(".btn.btn-green-peppers.active").on("click", function(){
console.log("hello");
if ($("#pizza section.green-pepper").css("visibility")==="visible"){
  $("#pizza section.green-pepper").css("visibility", "hidden");
  $(".btn.btn-green-peppers.active").removeClass("active");
  $("aside.panel.price ul li").eq(2).css("visibility", "hidden");
  var index = subtotal.indexOf(1);
  subtotal.splice(index, 1);
  total = subtotal.reduce(function(sum, value){
    return sum + value;
  }, 0);
  $("aside.panel.price strong").html("$" + total);
}
else{ $("#pizza section.green-pepper").css("visibility", "visible");
      $(".btn.btn-green-peppers").addClass("active");
      $("aside.panel.price ul li").eq(2).css("visibility", "visible");
      subtotal.push(gree);
      total = subtotal.reduce(function(sum, value){
        return sum + value;
      }, 0);
    $("aside.panel.price strong").html("$" + total);
}
});
// -----------------------------------------------------
// ---------PEPPERONI SHOW / HIDE --------
$(".btn.btn-pepperonni.active").on("click", function(){
console.log("hello");
if ($("#pizza section.pep").css("visibility")==="visible"){
  $("#pizza section.pep").css("visibility", "hidden");
  $(".btn.btn-pepperonni.active").removeClass("active");
  $("aside.panel.price ul li").eq(0).css("visibility", "hidden");
  var index = subtotal.indexOf(1);
  subtotal.splice(index, 1);
  total = subtotal.reduce(function(sum, value){
    return sum + value;
  }, 0);
  $("aside.panel.price strong").html("$" + total);

}
else{ $("#pizza section.pep").css("visibility", "visible");
$(".btn.btn-pepperonni").addClass("active");
$("aside.panel.price ul li").eq(0).css("visibility", "visible");
subtotal.push(pep);
total = subtotal.reduce(function(sum, value){
  return sum + value;
}, 0);
$("aside.panel.price strong").html("$" + total);
// $(".btn.btn-pepperonni.active").toggleClass("active");
}
});
// -----------------------------------------------------
// ---------MUSHROOMS SHOW / HIDE --------
$(".btn.btn-mushrooms.active").on("click", function(){
console.log("hello");
if ($("#pizza section.mushroom").css("visibility")==="visible"){
  $("#pizza section.mushroom").css("visibility", "hidden");
  $(".btn.btn-mushrooms.active").removeClass("active");
  $("aside.panel.price ul li").eq(1).css("visibility", "hidden");
  var index = subtotal.indexOf(1);
  subtotal.splice(index, 1);
  total = subtotal.reduce(function(sum, value){
    return sum + value;
  }, 0);
  $("aside.panel.price strong").html("$" + total);
}
else{ $("#pizza section.mushroom").css("visibility", "visible");
$(".btn.btn-mushrooms").addClass("active");
$("aside.panel.price ul li").eq(1).css("visibility", "visible");
subtotal.push(mush);
total = subtotal.reduce(function(sum, value){
  return sum + value;
}, 0);
$("aside.panel.price strong").html("$" + total);
}
});
// -----------------------------------------------------



// $("li").eq(4).toggle();








$("aside.panel.price strong").html("$" + total);

});

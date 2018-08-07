// Write your Pizza Builder JavaScript in this file.
var pepperonni = $(".btn-pepperonni");
var mushrooms = $(".btn-mushrooms");
var greenPeppers = $(".btn-green-peppers");
var crust = $(".btn-crust");
var sauce = $(".btn-sauce");
$(".price strong").text("$" + 10);

//console.log(prices);
// Make inactive;
pepperonni.removeClass("active");
mushrooms.removeClass("active");
greenPeppers.removeClass("active");
crust.removeClass("active");
sauce.removeClass("active");
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".pep").toggle();
$(".mushroom").toggle();
$(".green-pepper").toggle();
var prices = $(".price ul")
  .children()
  .toggle();

pepperonni.click(function() {
  pepperonni.toggleClass("active");
  $(".pep").toggle();
  $(prices[0]).toggle();
  updatePrice(1, pepperonni.hasClass("active"));
});

mushrooms.click(function() {
  mushrooms.toggleClass("active");
  $(".mushroom").toggle();
  $(prices[1]).toggle();
  updatePrice(1, mushrooms.hasClass("active"));
});

greenPeppers.click(function() {
  greenPeppers.toggleClass("active");
  $(".green-pepper").toggle();
  $(prices[2]).toggle();
  updatePrice(1, greenPeppers.hasClass("active"));
});

crust.click(function() {
  crust.toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  $(prices[4]).toggle();
  updatePrice(3, crust.hasClass("active"));
});

sauce.click(function() {
  sauce.toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  $(prices[3]).toggle();
  updatePrice(5, sauce.hasClass("active"));
});

//price
function updatePrice(cost, active) {
  var oldprice = parseInt(
    $(".price strong")
      .text()
      .replace("$", "")
  );
  if (active) {
    var newprice = oldprice + cost;
  } else {
    var newprice = oldprice - cost;
  }
  $(".price strong").text("$" + newprice);
}

//$(document).ready(function() {});

//$(document).ready(function() {
//  var heading = $("#menu ul").addClass("selected");
//    var heading2 = $("#menu ul:first-child");
//heading.append($("<li>test</li>"));
//   $("article:nth-child(2)").addClass("middle");
//    console.log($("#menu ul"));
//    var list = $(".list-item:odd").addClass("highlighted");
//    var last = $(".list-item:last").css("border", "10px solid #eee");
// heading.addClass('newclass')
//heading.removeClass()
//heading.toogleClass()
//#menu > ul > li:nth-child(1)
//heading.width() -> int
//heading.css('width') -> str
//heading.hasClass()
//console.log($("#menu").closest("li"));
//   console.log($("#menu ul").children());
//});

// Write your Pizza Builder JavaScript in this file.


// $(".btn").toggleClass("active");
$(".btn-sauce").toggleClass("active")
$(".btn-crust").toggleClass("active")

$(".price li:last").toggleClass("none");
$(".price li:last").prev().toggleClass("none");



$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".price li:first").toggleClass("none");
  totalll ();
});

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $(".price li:first").next().toggleClass("none");
  totalll ();
});

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".price li:first").next().next().toggleClass("none");
  totalll ();
});

$(".crust-gluten-free").removeClass("crust-gluten-free");
$(".sauce-white").removeClass("sauce-white");

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".price li:last").prev().toggleClass("none");
  totalll ();
});

$(".btn-crust").click(function() {
  
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".panel li:last").toggleClass("none");
    totalll ();

        
     // $(".crust-gluten-free").toggle()
});




// $("body > aside > ul > li:nth-child(5):hidden");
// var ourTotal = $(".btn");

var allPrices = $(".price li");
var total = 10;

function totalll () {
allPrices.each(function (x, one){
  var oneItem = one.innerText.substr(1).split(" ")[0];
  console.log(oneItem);

  if (!($(".price").hasClass("none"))){
    console.log("Something");
    total += Number(oneItem);
  }
  
});

$("#aaa").text("$" + total);
}








// Write your Pizza Builder JavaScript in this file.

// Iteration 1-3

$(".btn-pepperonni").click(function(e){
  $(".pep").toggle()
  $(".btn-pepperonni").toggleClass("active")
  $(".food-item1").toggle()
});



$(".btn-mushrooms").click(function(e){
  $(".mushroom").toggle()
  $(".btn-mushroom").toggleClass("active")
  $(".food-item2").toggle()
});


$(".btn-green-peppers").click(function(e){
  $(".green-pepper").toggle()
  $(".btn-green-peppers").toggleClass("active")
  $(".food-item3").toggle()
});

// Iteration 2

$(".crust").removeClass("crust-gluten-free")
$(".sauce").removeClass("sauce-white")

$(".btn-crust").click(function(e){
  $(".crust").toggleClass("crust-gluten-free")
  $(".btn-crust").toggleClass("active");
  $(".food-item5").toggle()
});

$(".btn-sauce").click(function(e){
  $(".sauce").toggleClass("sauce-white")
  $(".btn-sauce").toggleClass("active");
  $(".food-item4").toggle()
});

// Iteration 4

var total = ''

$(".panel.price > ul > li").addClass(function (i) {
  return "food-item" + (i + 1);
});

// Iteration 5

function calcPrice() {
  var total = 10; 
  var list = $(".panel.price > ul > li").not(".hidden").toArray();
  list.map(item => {
    total += parseInt(item.innerHTML.substr(1, 3));
  });
  $(".result").html("$" + total);
};

calcPrice();
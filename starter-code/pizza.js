// Write your Pizza Builder JavaScript in this file.


$(".btn-pepperonni").click(function() {
  $(".btn-pepperonni").toggleClass("active")
  $(".pep").toggle()
  $("#pep-price").toggle()
  updatePrice()
});

$(".btn-mushrooms").click(function() {
  $(".btn-mushrooms").toggleClass("active")
  $(".mushroom").toggle()
  $("#mushroom-price").toggle()
  updatePrice()
});

$(".btn-green-peppers").click(function() {
  $(".btn-green-peppers").toggleClass("active")
  $(".green-pepper").toggle()
  $("#green-peppers-price").toggle()
  updatePrice()
});

$(".btn-sauce").click(function() {
  $(".btn-sauce").toggleClass("active")
  $(".sauce").toggleClass("sauce-white")
  $("#white-sauce-price").toggle()
  updatePrice()
});

$(".btn-crust").click(function() {
  $(".btn-crust").toggleClass("active")
  $(".crust").toggleClass("crust-gluten-free")
  $("#gluten-free-price").toggle()
  updatePrice()
});


function updatePrice() {
 var total = 10; 
  if ($(".btn-pepperonni").hasClass("active")) {
    total += 1
  }
  else if ($(".btn-mushrooms").hasClass("active")) {
    total += 1
  }
  else if ($(".btn-green-peppers").hasClass("active")) {
    total += 1
  }
  else if ($(".btn-sauce").hasClass("active")) {
    total += 3
  }
  else if ($(".btn-crust").hasClass("active")) {
    total += 5
  }

var displayedTotalPrice = $("#total-price").text(total + "$");

return displayedTotalPrice;

}



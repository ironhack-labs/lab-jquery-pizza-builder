

$(".pep").hide()
$(".mushroom").hide()
$(".green-pepper").hide()
$(".price-list").hide()



$(".btn-pepperonni").click( function () {
  $(".pep").toggle()
  $(".btn-pepperonni").toggleClass("active")
  $(".price-pep").toggle()
  updatePrice();
})
$(".btn-mushrooms").click( function () {
  $(".mushroom").toggle()
  $(".btn-mushrooms").toggleClass("active")
  $(".price-mushrooms").toggle()
  updatePrice();
})
$(".btn-green-peppers").click( function () {
  $(".green-pepper").toggle()
  $(".btn-green-peppers").toggleClass("active")
  $(".price-green-peppers").toggle()
  updatePrice();
})



$(".btn-crust").click(function () {
  $(".crust").toggleClass("crust-gluten-free")
  $(".btn-crust").toggleClass("active")
  $(".price-crust").toggle()
  updatePrice();
})
$(".btn-sauce").click(function () {
  $(".sauce").toggleClass("sauce-white")
  $(".btn-sauce").toggleClass("active")
  $(".price-sauce").toggle()
  updatePrice();
})




function updatePrice() {
  var price = 10
  if ($(".btn-pepperonni").hasClass("active")) {
    price +=1
  }
  if ($(".btn-mushrooms").hasClass("active")) {
    price +=1
  }
  if ($(".btn-green-peppers").hasClass("active")) {
    price +=1
  }
  if ($(".btn-crust").hasClass("active")) {
    price +=5
  }
  if ($(".btn-sauce").hasClass("active")) {
    price +=3
  }
  $("strong").text("$" + price)
}
// Write your Pizza Builder JavaScript in this file.
//$(".selector").toggleClass(className)
function total() {
  var total = 10 + ($(".btn-pepperonni").hasClass("active"))+($(".btn-green-peppers").hasClass("active"))+($(".btn-mushrooms").hasClass("active"))+($(".btn-sauce").hasClass("active"))*3+($(".btn-crust").hasClass("active"))*5
  $(".total").html("$"+ total)
}

$(".btn-pepperonni").click(function() {
  $(".pep").toggle()
  $(".btn-pepperonni").toggleClass("active")
  $(".pep-price").toggle()
  total()
})

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggleClass("hidden")
  $(".btn-green-peppers").toggleClass("active")
  $(".pepper-price").toggleClass("hidden")
  total()
})

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggleClass("hidden")
  $(".btn-mushrooms").toggleClass("active")
  $(".mushroom-price").toggleClass("hidden")
  total()
})

$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white")
  $(".btn-sauce").toggleClass("active")
  $(".sauce-price").toggle()
  total()
})

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free")
  $(".btn-crust").toggleClass("active")
  $(".crust-price").toggle()
  total()
})


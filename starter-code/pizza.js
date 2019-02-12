// Write your Pizza Builder JavaScript in this file

$(document).ready(function() {
  $(".crust-gluten-free").toggleClass("crust-gluten-free");
  $(".sauce-white").toggleClass("sauce-white");
});

// function toggleIngredients(ing, button) {
//   $(ing).toggle();
//   $(button).toggleClass("active");


var pep = $(".btn-pepperonni").on("click", function(){
  $(".pep").toggle()
  $(this).toggleClass("active")
  $("li:contains(pepperonni)").toggle()

})

var mushrooms = $(".btn-mushrooms").on("click", function (){
  $(".mushroom").toggle()
  $(this).toggleClass("active")
  $("li:contains(mushroom)").toggle()
})

var greenPepper = $(".btn-green-peppers").on("click",function () {
  $('.green-pepper').toggle()
  $(this).toggleClass("active")
  $("li:contains(green)").toggle()
});

var glutenFree = $(".btn-crust").on("click", function() {
  $('.crust').toggleClass("crust-gluten-free")
  $(this).toggleClass("active")
  $("li:contains(gluten)").toggle()
})

var sauce = $(".btn-sauce").on("click", function() {
  $('.sauce').toggleClass('sauce-white')
  $(this).toggleClass("active")
  $("li:contains(sauce").toggle()
})


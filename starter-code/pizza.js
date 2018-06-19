// Write your Pizza Builder JavaScript in this file.
$(function () {
  //Hide elements oncharge
  togglePepper()
  toggleMushroom()
  togglePep()
  toggleCrust();
toggleSauce();
  //Assing add functions
  $('.btn-green-peppers').click(togglePepper)
  $('.btn-mushrooms').click(toggleMushroom)
  $('.btn-pepperonni').click(togglePep)
  $(".btn-crust").click(toggleCrust)
  $(".btn-sauce").click(toggleSauce)
})


function togglePepper () {
  $('.btn-green-peppers').toggleClass('active')
  $('#pizza > .green-pepper').toggle()
  $(".price > ul > li:contains(peppers)").toggle()
  $(".price > strong ")
}

function toggleMushroom () {
  $('.btn-mushrooms').toggleClass('active')
  $('#pizza > .mushroom').toggle()
  $(".price > ul > li:contains(mushroom)").toggle()
}

function togglePep () {
  $('.btn-pepperonni').toggleClass('active')
  $('#pizza > .pep').toggle()
  $(".price > ul > li:contains(pepperonni)").toggle()
}

function toggleCrust(){
$(".btn-crust").toggleClass("active")
$(".crust").toggleClass("crust-gluten-free")
$(".price > ul > li:contains(crust)").toggle()
}

function toggleSauce(){
$(".btn-sauce").toggleClass("active")
$(".sauce").toggleClass("sauce-white")
$(".price > ul > li:contains(sauce)").toggle()
}

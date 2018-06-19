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
  $(".price > ul > li:contains(peppers)").slideToggle()
  var total = $(".price > strong")
  if ($('.btn-green-peppers').hasClass('active')) {
    total.text('$' + (parseInt(total.text().slice(1)) + parseInt($(".price > ul > li:contains(peppers)").text().charAt(1))))
  } else {
    total.text('$' + (parseInt(total.text().slice(1)) - parseInt($(".price > ul > li:contains(peppers)").text().charAt(1))))
  }
}

function toggleMushroom () {
  $('.btn-mushrooms').toggleClass('active')
  $('#pizza > .mushroom').toggle()
  $(".price > ul > li:contains(mushroom)").slideToggle()
  var total = $(".price > strong")
  if ($('.btn-mushrooms').hasClass('active')) {
    total.text('$' + (parseInt(total.text().slice(1)) + parseInt($(".price > ul > li:contains(mushroom)").text().charAt(1))))
  } else {
    total.text('$' + (parseInt(total.text().slice(1)) - parseInt($(".price > ul > li:contains(mushroom)").text().charAt(1))))
  }
}

function togglePep () {
  $('.btn-pepperonni').toggleClass('active')
  $('#pizza > .pep').toggle()
  $(".price > ul > li:contains(pepperonni)").slideToggle()
  var total = $(".price > strong")
  if ($('.btn-pepperonni').hasClass('active')) {
    total.text('$' + (parseInt(total.text().slice(1)) + parseInt($(".price > ul > li:contains(pepperonni)").text().charAt(1))))
  } else {
    total.text('$' + (parseInt(total.text().slice(1)) - parseInt($(".price > ul > li:contains(pepperonni)").text().charAt(1))))
  }
}

function toggleCrust(){
$(".btn-crust").toggleClass("active")
$(".crust").toggleClass("crust-gluten-free")
$(".price > ul > li:contains(crust)").slideToggle()
var total = $(".price > strong")
if ($('.btn-crust').hasClass('active')) {
  total.text('$' + (parseInt(total.text().slice(1)) + parseInt($(".price > ul > li:contains(crust)").text().charAt(1))))
} else {
  total.text('$' + (parseInt(total.text().slice(1)) - parseInt($(".price > ul > li:contains(crust)").text().charAt(1))))
}
}

function toggleSauce(){
$(".btn-sauce").toggleClass("active")
$(".sauce").toggleClass("sauce-white")
$(".price > ul > li:contains(sauce)").slideToggle()
var total = $(".price > strong")
if ($('.btn-sauce').hasClass('active')) {
  total.text('$' + (parseInt(total.text().slice(1)) + parseInt($(".price > ul > li:contains(sauce)").text().charAt(1))))
} else {
  total.text('$' + (parseInt(total.text().slice(1)) - parseInt($(".price > ul > li:contains(sauce)").text().charAt(1))))
}
}

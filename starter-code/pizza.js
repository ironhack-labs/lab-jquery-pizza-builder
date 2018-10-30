$(document).ready(function() {

let defaultPrice = 13; 

let togglePep = $(".btn-pepperonni").click(() => {
  $(".pep").toggle()
  $(".btn-pepperonni").toggleClass("active")
  $("#pepPrice").toggle(200);
  if ($(".btn-pepperonni").hasClass("active")) {
    defaultPrice ++
  } else defaultPrice --
  $("#total").text(defaultPrice);
});

let toggleGreen = $(".btn-green-peppers").click(() => {
  $(".green-pepper").toggle()
  $(".btn-green-peppers").toggleClass("active")
  $("#mushPrice").toggle(200);
  if ($(".btn-green-peppers").hasClass("active")) {
    defaultPrice ++
  } else defaultPrice --
  $("#total").text(defaultPrice);
});

let toggleMush = $(".btn-mushrooms").click(() => {
  $(".mushroom").toggle()
  $(".btn-mushrooms").toggleClass("active")
  $("#greenPrice").toggle(200);
  if ($(".btn-mushrooms").hasClass("active")) {
    defaultPrice ++
  } else defaultPrice --
  $("#total").text(defaultPrice);
});

let toggleSauce = $(".btn-sauce").click(()=>{
  $(".sauce").toggleClass("sauce-white")
  $(".btn-sauce").toggleClass("active")
  $("#whitePrice").toggle(200);
  if ($(".btn-sauce").hasClass("active")) {
    defaultPrice = defaultPrice + 3;
  } else defaultPrice = defaultPrice - 3;
  $("#total").text(defaultPrice);
});

let toggleCrust = $(".btn-crust").click(()=>{
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active")
  $("#glutenPrice").toggle(200);
  if ($(".btn-crust").hasClass("active")) {
    defaultPrice = defaultPrice + 5
  } else defaultPrice = defaultPrice - 5
  $("#total").text(defaultPrice);
})

























});
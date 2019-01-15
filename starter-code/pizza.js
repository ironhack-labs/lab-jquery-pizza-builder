// add and remove green-pepper

$(document).ready (function(){
  $(".btn-green-peppers").click(function(event) {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
  });
});

$(document).ready (function(){
  $(".btn-mushrooms").click(function(event) {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
  })
})

$(document).ready (function(){
  $(".btn-pepperonni").click(function(event) {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
  })
})

$(document).ready (function(){
  $(".btn-sauce").click(function(event) {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
  })
})

$(document).ready (function(){
  $(".btn-crust").click(function(event) {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    // toggle display to none / block
  })
})

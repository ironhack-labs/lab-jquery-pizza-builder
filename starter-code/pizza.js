// Write your Pizza Builder JavaScript in this file.
// Write your Pizza Builder JavaScript in this file.



$(document).ready(function(){

  // remove class
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn").removeClass("active");
  $(".li-white-sauce").hide();
  $(".li-gluten-free-crust").hide();

  $(".btn-mushrooms").click(function() {
    $('.mushroom').toggle();
  })

  $(".btn-pepperonni").click(function() {
    $('.pep').toggle();
  })

  $(".btn-green-peppers").click(function() {
    $('.green-pepper').toggle();
  })

  $('.btn-sauce').click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".li-white-sauce").toggle();
  })

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".li-gluten-free-crust").toggle();
  })


    $(".btn").click(function(){
      $(this).toggleClass("active");
    });
  var basePrice = 13;

  var selection = $("li").val();

  if(selection === '.li-white-sauce'){

  }

});

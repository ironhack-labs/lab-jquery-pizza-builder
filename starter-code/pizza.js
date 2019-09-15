// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var totalPrice = 13;
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(this).toggleClass('active');
    $("li:contains(pepperonni)").toggle();
    if ($(this).hasClass("active")) totalPrice += 1;
    else totalPrice -= 1;
    $("#total").html(totalPrice)
  });
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass('active');
    $("li:contains(mushrooms)").toggle();
    if ($(this).hasClass("active")) totalPrice += 1;
    else totalPrice -= 1;
    $("#total").html(totalPrice)
  });
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass('active');
    $("li:contains(green peppers)").toggle();
    if ($(this).hasClass("active")) totalPrice += 1;
    else totalPrice -= 1;
    $("#total").html(totalPrice)
  });
  $(".btn-sauce").click(() => {
    $('.sauce').toggleClass('sauce-white');
    $(".btn-sauce").toggleClass('active');
    $("li:contains(white)").toggle();
    if ($(".btn-sauce").hasClass("active")) totalPrice += 3;
    else totalPrice -= 3;
    $("#total").html(totalPrice)
  })
  $(".btn-crust").click(() => {
    $('.crust').toggleClass('crust-gluten-free');
    $(".btn-crust").toggleClass('active');
    $("li:contains(gluten-free)").toggle();
    if ($('.btn-crust').hasClass("active")) totalPrice += 5;
    else totalPrice -= 5;
    $("#total").html(totalPrice)
  })
});
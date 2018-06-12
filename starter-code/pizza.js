// Write your Pizza Builder JavaScript in this file.

// console.log($(".panel").html().indexOf("pepperonni"));
// console.log($('.panel:contains("$1 pepperonni")'));
// console.log(($(".pepperonni").hasClass('active')));



var totalPrice = 13;

$('li:contains("$3 white sauce")').hide();
$('li:contains("$5 gluten-free crust")').hide();

$("#total-price").html(totalPrice);

$(".btn-pepperonni").click(function(){

  $(".pep").toggle();
});


$(".btn-mushrooms").click(function(){

  $(".mushroom").toggle();
});

$(".btn-green-peppers").click(function(){

  $(".green-pepper").toggle();
});

$(".btn-sauce").click(function(){
  // console.log($(".sauce").hasClass('sauce-white'));
  if($(".sauce").hasClass('sauce-white')) {
    $(".sauce").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $('li:contains("$3 white sauce")').hide();
    totalPrice -= 3;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
  } else if ($(".sauce").hasClass('sauce-white') === false) {
    $(".sauce").addClass("sauce-white");
    $(".btn-sauce").addClass("active");
    $('li:contains("$3 white sauce")').show();
    totalPrice += 3;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
}
});

$(".btn-crust").click(function(){ 
  if($(".crust").hasClass('crust-gluten-free')) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $('li:contains("$5 gluten-free crust")').hide();
    totalPrice -= 5;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
  } else if($(".crust").hasClass('crust-gluten-free') === false) {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").addClass("active");
    $('li:contains("$5 gluten-free crust")').show();
    totalPrice += 5;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
}
});

$(".btn-pepperonni").click(function(){ 
  if($(".btn-pepperonni").hasClass('active')) {
    $(".btn-pepperonni").removeClass("active");
    $('li:contains("$1 pepperonni")').hide();
    totalPrice -= 1;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
    // If btn is inactive, should return true
    // If btn is active, should return false
    // console.log(($(".btn-pepperonni").hasClass('active')) === false);
  } else if($(".btn-pepperonni").hasClass('active') === false) {
    $(".btn-pepperonni").addClass("active");
    $('li:contains("$1 pepperonni")').show();
    totalPrice += 1;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
    // console.log(($(".btn-pepperonni").hasClass('active')) === false);
}
});

$(".btn-mushrooms").click(function(){ 
  if($(".btn-mushrooms").hasClass('active')) {
    $(".btn-mushrooms").removeClass("active");
    $('li:contains("$1 mushrooms")').hide();
    totalPrice -= 1;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
  } else if($(".btn-mushrooms").hasClass('active') === false) {
    $(".btn-mushrooms").addClass("active");
    $('li:contains("$1 mushrooms")').show();
    totalPrice += 1;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
}
});

$(".btn-green-peppers").click(function(){ 
  if($(".btn-green-peppers").hasClass('active')) {
    $(".btn-green-peppers").removeClass("active");
    $('li:contains("$1 green peppers")').hide();
    totalPrice -= 1;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
  } else if ($(".btn-green-peppers").hasClass('active') === false) {
    $(".btn-green-peppers").addClass("active");
    $('li:contains("$1 green peppers")').show();
    totalPrice += 1;
    // console.log(totalPrice);
    $("#total-price").html(totalPrice);
}
});





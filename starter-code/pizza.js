// Write your Pizza Builder JavaScript in this file.
$("li:contains(white sauce)").toggle();
$("li:contains(gluten-free crust)").toggle();
let price = 13;
$('strong').text('$'+price);
 

$(".btn-green-peppers").on("click", function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains(green peppers)").toggle();
  if($(".btn-green-peppers").hasClass("active")){
    price = price +1;
  } else {
    price = price -1;
  }
  $('strong').text('$'+price);
});

$(".btn-pepperonni").on("click", function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains(pepperonni)").toggle();
  if($(".btn-pepperonni").hasClass("active")){
    price = price +1;
  } else {
    price = price -1;
  }
  $('strong').text('$'+price);
});

$(".btn-mushrooms").on("click", function() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains(mushrooms)").toggle();
  if($(".btn-mushrooms").hasClass("active")){
    price = price +1;
  } else {
    price = price -1;
  }
  $('strong').text('$'+price);
});

$(".btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains(white sauce)").toggle();
  if($(".btn-sauce").hasClass("active")){
    price = price +3;
  } else {
    price = price -3;
  }
  $('strong').text('$'+price);
});

$(".btn-crust").on("click", function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains(gluten-free crust)").toggle();
  if($(".btn-crust").hasClass("active")){
    price = price +5;
  } else {
    price = price -5;
  }
  $('strong').text('$'+price);
});


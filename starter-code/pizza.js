// Write your Pizza Builder JavaScript in this file.

//toggle toppings
$(document).ready(function() {
let total = 13;
$('strong').hide();

$('.strong').html("$" + total);
$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');
$('.btn-sauce').removeClass('active');
$('.btn-crust').removeClass('active');
$('li:contains(gluten-free crust)').hide();
$('li:contains(white sauce)').hide();
$('.btn').click(function(e){
  $('strong').show();
});
$('.btn-pepperonni').click(function(e){
  $('.pep').toggle();
});
$('.btn-mushrooms').click(function(e){
  $('.cap').toggle();
  $('.stem').toggle();
});
$('.btn-green-peppers').click(function(e){
  $('.green-pepper').toggle();
});
$('.btn-sauce').click(function(e){
  $('.sauce').toggleClass('sauce-white');
});
$('.btn-crust').click(function(e){
  $('.crust').toggleClass('crust-gluten-free');
});



$('.btn-sauce').click(function(e){
  $('.btn-sauce').toggleClass('active');
  $('li:contains(white sauce)').toggle();
  if($('.btn-sauce').hasClass('active')){
    total += 3;
  }
  else{
    total -=3;
  }
  console.log(total);
  $('strong').text("$" + total);
});


$('.btn-crust').click(function(e){
  $('.btn-crust').toggleClass('active');
  $('li:contains(gluten-free crust)').toggle();
  if($('.btn-crust').hasClass('active')){
    total += 5;
  }
  else{
    total -= 5;
  }
  console.log(total);
  $('strong').text("$" + total);
});

$('.btn-pepperonni').click(function(e){
  $('.btn-pepperonni').toggleClass('active');
  $('li:contains(pepperonni)').toggle();
  if($('.btn-pepperonni').hasClass('active')){
    total += 1;
  }
  else{
    total -= 1;
  }
  console.log(total);
  $('strong').text("$" + total);
});

$('.btn-mushrooms').click(function(e){
  $('.btn-mushrooms').toggleClass('active');
  $('li:contains(mushrooms)').toggle();
  if($('.btn-mushrooms').hasClass('active')){
    total += 1;
  }
  else {
    total -= 1;
  }
  console.log(total);
  $('strong').text("$" + total);
});

$('.btn-green-peppers').click(function(e){
  $('.btn-green-peppers').toggleClass('active');
  $('li:contains(green peppers)').toggle();
  if($('.btn-green-peppers').hasClass('active')){
    total += 1;
  }
  else {
    total -= 1;
  }
  console.log(total);
  $('strong').text("$" + total);
});

});


// var priceArray = document.getElementsByClassName('.price' > 'ul' > 'li');
// var eachPrice = priceArray
// console.log($('.price').find('ul').index[0].HTML);

//show hide price based on click

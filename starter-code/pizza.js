// Write your Pizza Builder JavaScript in this file.

var xtraSum = 0;
var totalPrice = 13;
var grandTotal = 0;

$(document).ready(function(){

  //pepperoni button

$('.btn-pepperonni').click(function() {
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('.price li:contains(pepperonni)').toggle();
  

  if($('.pep').is(":visible")){
    xtraSum ++;
  }
  else{
    xtraSum --;
  }
  grandTotal = totalPrice + xtraSum;
  $('.total-price').text("$" + grandTotal);
});

//mushrooms button
$('.btn-mushrooms').click(function() {
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  $('.price li:contains(mushrooms)').toggle();

  if($('.mushroom').is(":visible")){
    xtraSum ++;
  }
  else{
    xtraSum --;
  }
  grandTotal = totalPrice + xtraSum;
  $('.total-price').text("$" + grandTotal);
});

//green peppers button
$('.btn-green-peppers').click(function() {
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('.price li:contains(green)').toggle();

  if($('.green-pepper').is(":visible")){
    xtraSum ++;
  }
  else{
    xtraSum --;
  }
  grandTotal = totalPrice + xtraSum;
  $('.total-price').text("$" + grandTotal);
});

//white sauce button
$('.btn-sauce').click(function() {
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.price li:contains(sauce)').toggle();

  if($('.sauce-white').is(":visible")){
    xtraSum += 3;
  }
  else{
    xtraSum -= 3;
  }
  grandTotal = totalPrice + xtraSum;
  $('.total-price').text("$" + grandTotal);
  
});

//gluten-free crust button
$('.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.price li:contains(crust)').toggle();

  if($('.crust-gluten-free').is(":visible")){
    xtraSum += 5;
  }
  else{
    xtraSum -= 5;
  }
  grandTotal = totalPrice + xtraSum;
  $('.total-price').text("$" + grandTotal);
 
});

//hide white sauce and gluten free price by default
$('.price li:contains(sauce)').css("display", "none");
$('.price li:contains(crust)').css("display", "none");


});
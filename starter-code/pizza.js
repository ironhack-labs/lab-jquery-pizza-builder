// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  // $('.pep').toggle();
  // $('.mushroom').toggle();
  // $('.green-pepper').toggle();
  $('.crust').toggleClass("crust-gluten-free");
  $('.sauce').toggleClass("sauce-white");
  // $('.btn-green-peppers').toggleClass('active');
  // $('.btn-mushrooms').toggleClass('active');
  // $('.btn-pepperonni').toggleClass('active');
  $('.btn-crust').toggleClass('active');
  $('.btn-sauce').toggleClass('active');
$('.panel.price>ul>li:last-child').hide();
$('.panel.price>ul>li:nth-child(4)').hide();
var pizzaPrice= 13;
$('strong').text("$"+pizzaPrice);


 
$('.btn-pepperonni').click(function(){
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  $('.panel.price>ul>li:first-child').toggle();
  if ($('.btn-pepperonni').hasClass('active')){
    console.log('baaa')
    pizzaPrice++;
    $('strong').text("$"+pizzaPrice);}
    else{
      console.log("fuck this pizzaaa")
      pizzaPrice--;
      $('strong').text("$"+pizzaPrice);
    }
  
  

})
$('.btn-mushrooms').click(function(){
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  $('.panel.price>ul>li:nth-child(2)').toggle();
  if ($('.btn-mushrooms').hasClass('active')){
    pizzaPrice++;
    $('strong').text("$"+pizzaPrice);}
    else{
      pizzaPrice--;
      $('strong').text("$"+pizzaPrice);
    }
})
$('.btn-green-peppers').click(function(){
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('.panel.price>ul>li:nth-child(3)').toggle();
  if ($('.btn-green-peppers').hasClass('active')){
    pizzaPrice++;
    $('strong').text("$"+pizzaPrice);}
    else{
      pizzaPrice--;
      $('strong').text("$"+pizzaPrice);
    }
})

$('.btn-crust').click(function(){
  $('.crust').toggleClass("crust-gluten-free");
  $('.btn-crust').toggleClass('active');
  $('.panel.price>ul>li:last-child').toggle();
  if ($('.btn-crust').hasClass('active')){
    pizzaPrice=pizzaPrice+5;
    $('strong').text("$"+pizzaPrice);}
    else{
      pizzaPrice=pizzaPrice-5;
      $('strong').text("$"+pizzaPrice);
    }
})
$('.btn-sauce').click(function(){
  $('.sauce').toggleClass("sauce-white");
  $('.btn-sauce').toggleClass('active');
  $('.panel.price>ul>li:nth-child(4)').toggle();
  if ($('.btn-sauce').hasClass('active')){
    pizzaPrice=pizzaPrice+3;
    $('strong').text("$"+pizzaPrice);}
    else{
      pizzaPrice=pizzaPrice-3;
      $('strong').text("$"+pizzaPrice);
    }
})
})
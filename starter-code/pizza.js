// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var pep = 0;
  var greenPepper = 0;
  var mushroom = 0;
  var whiteSauce = 0;
  var crustGluten = 0;
  var s=0;
  $('.price > ul > li:nth-child(4)').css('display','none');
  $('.price > ul > li:nth-child(5)').css('display','none')

// ITERATION 1
$('.btn-green-peppers').click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass('active');
  if ($(".btn-green-peppers").hasClass('active')){
    greenPepper=1};
    price(1, greenPepper);
  $('.price > ul > li:nth-child(3)').toggle()
})

$('.btn-mushrooms').click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass('active');
  if ($(".btn-mushrooms").hasClass('active')){
    mushroom=1};
  $('.price > ul > li:nth-child(2)').toggle()
  price(1, mushroom);
})

$('.btn-pepperonni').click(function(){
   $(".pep").toggle();
  $(".btn-pepperonni").toggleClass('active');
  if ($(".btn-pepperonni").hasClass('active')){
    pep=1};
    price(1, pep);
  $('.price > ul > li:nth-child(1)').toggle()
})

// ITERATION 2
$("#pizza .crust").removeClass("crust-gluten-free");
$("#pizza .sauce").removeClass("sauce-white");
$(".btn-sauce").removeClass("active");

$(".btn-crust").removeClass("active");

$('.btn-sauce').click(function(){
  $(".sauce").toggleClass('sauce-white');
  $(".btn-sauce").toggleClass('active');
  if ($(".btn-sauce").hasClass('active')){
    whiteSauce=1};
    price(3, whiteSauce);
  $('.price > ul > li:nth-child(4)').toggle()
})
$('.btn-crust').click(function(){
  $(".crust").toggleClass('crust-gluten-free');
  $(".btn-crust").toggleClass('active');
  if(($(".btn-crust").hasClass('active'))){
    crustGluten = 1
  }
  s=price(5,crustGluten );
  $('.price > ul > li:nth-child(5)').toggle()
})
function price (price, ing){
  s+=price*ing
  return s
}
 $('body > aside > strong').text("$ "+ s)
});

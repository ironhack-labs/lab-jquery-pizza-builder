// Write your Pizza Builder JavaScript in this file.
$('.btn.btn-crust').toggleClass('active');
$('.btn.btn-sauce').toggleClass('active');

$('.sauce').toggleClass('sauce-white');
$('.crust').toggleClass('crust-gluten-free');

$('.panel.price>ul>li:contains(white sauce)').toggle();
$('.panel.price>ul>li:contains(gluten-free)').toggle();

$('.btn.btn-pepperonni').eq(0).click(function(){
  $(this).toggleClass('active');
  $('.pep').toggle();
  $('.panel.price>ul>li:contains(peperonni)').toggle();
  calculatePrice();
});
$('.btn.btn-mushrooms').eq(0).click(function(){
  $(this).toggleClass('active');
  $('.mushroom').toggle();
  $('.panel.price>ul>li:contains(mushroom)').toggle();
  calculatePrice();
});
$('.btn.btn-green-peppers').eq(0).click(function(){
  $(this).toggleClass('active');
  $('.green-pepper').toggle();
  $('.panel.price>ul>li:contains(green pepper)').toggle();
  calculatePrice();
});
$('.btn.btn-sauce').eq(0).click(function(){
  $(this).toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
  $('.panel.price>ul>li:contains(sauce)').toggle();
  calculatePrice();
});
$('.btn.btn-crust').eq(0).click(function(){
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.panel.price>ul>li:contains(gluten-free)').toggle();
  calculatePrice();
});
function calculatePrice(){
   let ingredients= $('.panel.price>ul>li:visible');
   let price=10;
   for(let a=0;a<ingredients.length;a++){
     price += Number(ingredients.eq(a).html().split(' ')[0].split('$')[1]);
   }
   $('.panel.price>strong').eq(0).text('$'+price);
}
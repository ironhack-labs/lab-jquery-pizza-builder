// Write your Pizza Builder JavaScript in this file.
//toggle toppings
$('.btn-pepperonni').click(function(e){
  $('.pep').toggle();
})
$('.btn-mushrooms').click(function(e){
  $('.cap').toggle();
  $('.stem').toggle();
})
$('.btn-green-peppers').click(function(e){
  $('.green-pepper').toggle();
})

//remove sauce/crust
$('.crust').removeClass('crust-gluten-free');

$('.sauce').removeClass('sauce-white');


//toggle sauce/crust
$('.btn-sauce').click(function(e){
  $('.sauce').toggleClass('sauce-white');
});
$('.btn-crust').click(function(e){
  $('.crust').toggleClass('crust-gluten-free');
});

//removing active class from sauce and crust
$('.btn-sauce').removeClass('active');
$('.btn-crust').removeClass('active');
//button toggle active class
$('.btn-sauce').click(function(e){
  $('.btn-sauce').toggleClass('active');
})
$('.btn-crust').click(function(e){
  $('.btn-crust').toggleClass('active');
})
$('.btn-pepperonni').click(function(e){
  $('.btn-pepperonni').toggleClass('active');
  $('li:contains(pepperonni)').toggle();
})
$('.btn-mushrooms').click(function(e){
  $('.btn-mushrooms').toggleClass('active');
})
$('.btn-green-peppers').click(function(e){
  $('.btn-green-peppers').toggleClass('active');
})

//show hide price based on click
$('ul.ingredientPrices li:nth-child(n4)') .detach();

/* prepend as is does not work well
$('.btn-sauce').click(function(){
  $('ul.ingredientPrices').prepend('.li:nth-child(4)');
}); */



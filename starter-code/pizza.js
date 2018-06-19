
$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');

$('.btn-crust').removeClass('active');
$('.btn-sauce').removeClass('active');


$('.btn-pepperonni').click(function(){

   alert('puchaste pep');

   if ($('.pep').css('visibility') == 'visible'){
   $('*.pep').attr('style','visibility:hidden')
   $('.btn-pepperonni').removeClass('active')}

   else {$('*.pep').attr('style','visibility:visible')
   $('.btn-pepperonni').addClass('active')}

})

$('.btn-mushrooms').click(function(){

  alert('puchaste mush');

  if ($('.mushroom').css('visibility') == 'visible'){
  $('*.mushroom').attr('style','visibility:hidden')
  $('.btn-mushrooms').removeClass('active')}

  else {$('*.mushroom').attr('style','visibility:visible')
  $('.btn-mushrooms').addClass('active')}

})
  

  $('.btn-green-peppers').click(function(){

    alert('puchaste pimiento');
  
    if ($('.green-pepper').css('visibility') == 'visible'){
    $('*.green-pepper').attr('style','visibility:hidden')
    $('.btn-green-peppers').removeClass('active')}
  
    else {$('*.green-pepper').attr('style','visibility:visible')
    $('.btn-green-peppers').addClass('active')}
  
  })


$('.btn-sauce').click(function(){
   alert('puchaste salsa');

  if ($('.sauce').hasClass('sauce-white') ){
  $('.sauce').removeClass('sauce-white');
  $('.btn-sauce').removeClass('active')
  }

  else {$('.sauce').addClass('sauce-white');
    $('.btn-sauce').addClass('active')}
 })


 $('.btn-crust').click(function(){
  alert('puchaste crust');

 if ($('.crust').hasClass('crust-gluten-free') ){
 $('.crust').removeClass('crust-gluten-free');
 $('.btn-crust').removeClass('active')
 }

 else {$('.crust').addClass('crust-gluten-free');
   $('.btn-crust').addClass('active')}
})



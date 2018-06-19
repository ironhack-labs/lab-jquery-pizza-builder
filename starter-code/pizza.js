$(document).ready(function(){


var ws = $("li:contains('white sauce')");
ws.toggle()

var gf = $("li:contains('$5 gluten-free crust')");
gf.toggle()

$('.btn').click(function(event){
  $(this).toggleClass('active')
  calcTotalPrice(this,$(this).val())
});

$('.btn-pepperonni').click(function(event){
  $('.pep').toggle()
  $("li:contains('pepperonni')").toggle()
});

$('.btn-green-peppers').click(function(event){
  $('.green-pepper').toggle()
  $("li:contains('green pepper')").toggle()
});

$('.btn-mushrooms').click(function(event){
  $('.mushroom').toggle()
  $("li:contains('mushroom')").toggle()
});

$('.btn-sauce').click(function(event){
  $('.sauce').toggleClass('sauce-white')
  ws.toggle();
});

$('.btn-crust').click(function(event){
  $('.crust').toggleClass('crust-gluten-free')
  gf.toggle()
});

var calcTotalPrice = function(elemento,elementoValue){
  
      if ($(elemento).hasClass('active')) {
        $('#totalPrice').html(Number($('#totalPrice').html()) + Number(elementoValue))
      } else {
        $('#totalPrice').html(Number($('#totalPrice').html()) - Number(elementoValue))
      }
    
  }
  
});









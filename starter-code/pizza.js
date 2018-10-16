// Write your Pizza Builder JavaScript in this file.

$('.sauce').hide()
$('.pep').hide()
$('.mushroom').hide()
$('.green-pepper').hide()
$('section').removeClass('crust-gluten-free')
$('.price li').hide()
$('.price strong').text('$10')
var ingPrice = {
  'pepperonni': 1,
  'mushrooms': 1,
  'green-peppers': 1,
  'white-sauce': 3,
  'gluten-free-crust': 5,

}

var counter = 10;


$('button.btn-pepperonni').click(function(){
  $( ".pep" ).toggle()
  if( $('.pep').css('display') == 'block' ) {
    $('button.btn-pepperonni').addClass('active')
    $('#pepprice').show()
    counter += ingPrice.pepperonni
    $('.price strong').text('$'+ counter) ;

  } else {
    $('button.btn-pepperonni').removeClass('active')
    $('#pepprice').hide()
    counter -= ingPrice.pepperonni
    $('.price strong').text('$'+ counter)
  }

})


$('button.btn-mushrooms').click(function(){
  $( ".mushroom" ).toggle()
  if( $('.mushroom').css('display') == 'block' ) {
    $('button.btn-mushrooms').addClass('active')
    $('#mushprice').show()
    counter += ingPrice.mushrooms
    $('.price strong').text('$'+ counter) ;
  } else {
    $('button.btn-mushrooms').removeClass('active')
    $('#mushprice').hide()
    counter -= ingPrice.mushrooms
    $('.price strong').text('$'+ counter)
  }
  
})
$('button.btn-green-peppers').click(function(){

  
  $( ".green-pepper" ).toggle()

  if( $('.green-pepper').css('display') == 'block' ) {
    $('button.btn-green-peppers').addClass('active')
    $('#greenprice').show()
    counter += ingPrice["green-peppers"]
    $('.price strong').text('$'+ counter) ;
    
  } else {
    $('button.btn-green-peppers').removeClass('active')
    $('#greenprice').hide()
    counter -= ingPrice["green-peppers"]
    $('.price strong').text('$'+ counter)
  }
})


// 



$('button.btn-sauce').click(function(){

  
  $( ".sauce" ).toggle()

  if( $('.sauce').css('display') == 'block' ) {
    $('button.btn-sauce').addClass('active');
    $('#whiteprice').show();
    counter += ingPrice["white-sauce"];
    $('.price strong').text('$'+ counter) ;
    
  } else {
    $('button.btn-sauce').removeClass('active');
    $('#whiteprice').hide();
    counter -= ingPrice["white-sauce"];
    $('.price strong').text('$'+ counter);
  }
})


$('button.btn-crust').click(function(){

  
  $( "section.crust" ).toggleClass('crust-gluten-free');

  if( $('section.crust-gluten-free').css('display') == 'block' ) {
    $('button.btn-crust').addClass('active');
    $('#glutenprice').show();
    counter += ingPrice["gluten-free-crust"];
    $('.price strong').text('$'+ counter) ;
    
  } else {
    $('button.btn-crust').removeClass('active');
    $('#glutenprice').hide();
    counter -= ingPrice["gluten-free-crust"];
    $('.price strong').text('$'+ counter);
  }
})


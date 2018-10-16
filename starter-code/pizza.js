// Write your Pizza Builder JavaScript in this file.


$('.pep').hide();
$('.mushroom').hide();
$('.green-pepper').hide();
$('.price li').hide();
$('.price strong').text('$10');

var ingPrice = {
  'pepperonni': 1,
  'mushroom': 1,
  'green-peppers': 1,
  'white-sauce': 3,
  'gluten-free-crust': 5,
}

var counter = 10;

// Add and remove toppings
$('.btn-pepperonni').click(function(){
  $('.pep').toggle();
  
  if($('.pep').css('display' ) === 'block') {
    $('button.btn-pepperonni').addClass('active')
    $('#pep-price').show();
    counter += ingPrice.pepperonni
    $('.price strong').text('$' + counter)
  } else {
    $('button.btn-pepperonni').removeClass('active')
    $('#pep-price').hide();
    counter -= ingPrice.pepperonni
    $('.price strong').text('$' + counter)
  }
  
  })

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();

    if($('.mushroom').css('display' ) === 'block') {
      $('button.btn-mushrooms').addClass('active')
      $('#mush-price').show();
      counter += ingPrice.mushroom
      $('.price strong').text('$' + counter)
    } else {
      $('button.btn-mushrooms').removeClass('active')
      $('#mush-price').hide();
      counter -= ingPrice.mushroom
      $('.price strong').text('$' + counter)
    }
  })
  
$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();

    if($('.green-pepper').css('display' ) === 'block') {
      $('button.btn-green-peppers').addClass('active')
      $('#green-price').show();
      counter += ingPrice["green-peppers"]
      $('.price strong').text('$' + counter)
    } else {
      $('button.btn-green-peppers').removeClass('active')
      $('#green-price').hide();
      counter -= ingPrice["green-peppers"]
      $('.price strong').text('$' + counter)
    }
  })



// Choose crust and Sauce 
$('.sauce').hide();
$('section').removeClass('crust-gluten-free');

$('.btn-sauce').click(function(){
  $('.sauce').toggle();

  if($('.sauce').css('display' ) === 'block') {
    $('button.btn-sauce').addClass('active')
    $('#white-price').show();
    counter += ingPrice["white-sauce"]
    $('.price strong').text('$' + counter)
  } else {
    $('button.btn-sauce').removeClass('active')
    $('#white-price').hide();
    counter -= ingPrice["white-sauce"]
    $('.price strong').text('$' + counter)
  }
  })

$('button.btn-crust').click(function(){
  $('section.crust').toggleClass('crust-gluten-free');

  if($('.crust-gluten-free').css('display' ) === 'block') {
    $('button.btn-crust').addClass('active')
    $('#gluten-price').show();
    counter += ingPrice["gluten-free-crust"]
    $('.price strong').text('$' + counter)
  } else {
    $('button.btn-crust').removeClass('active')
    $('#gluten-price').hide();
    counter -= ingPrice["gluten-free-crust"]
    $('.price strong').text('$' + counter)
  }
    })




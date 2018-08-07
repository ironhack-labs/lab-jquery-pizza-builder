// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  $('.btn-sauce').removeClass('active')
  $('.sauce').removeClass('sauce-white')
  $('.price li:nth(3)').toggle()
  $('.price li:nth(4)').toggle()
  $('.btn-crust').removeClass('active')
  $('.crust').removeClass('crust-gluten-free')
  $('strong').text('$'+calculatePrice())


  $('.btn-pepperonni').click(function(){
    $(this).toggleClass('active')
    $('.pep').toggle();
    $('.price li:nth(0)').toggle();
    $('strong').text('$'+calculatePrice())
  })
  $('.btn-mushrooms').click(function(){
    $(this).toggleClass('active')
    $('.mushroom').toggle();
    $('.price li:nth(1)').toggle()
    $('strong').text('$'+calculatePrice())
  })
  $('.btn-green-peppers').click(function(){
    $(this).toggleClass('active')
    $('.green-pepper').toggle();
    $('.price li:nth(2)').toggle()
    $('strong').text('$'+calculatePrice())
  })
  $('.btn-sauce').click(function(){
    $(this).toggleClass('active')
    $('.sauce').toggleClass('sauce-white');
    $('.price li:nth(3)').toggle()
    $('strong').text('$'+calculatePrice())
  })
  $('.btn-crust').click(function(){
    $(this).toggleClass('active')
    $('.crust').toggleClass('crust-gluten-free');
    $('.price li:nth(4)').toggle()
    $('strong').text('$'+calculatePrice())
  })

  function calculatePrice(){
    var totalPrice = 10; //base
    for ( var x = 0; x < $('.price li:visible').length ; x++ ){
        totalPrice += Number($('.price li:visible')[x].innerHTML[1])
      }
    return totalPrice
  }
})


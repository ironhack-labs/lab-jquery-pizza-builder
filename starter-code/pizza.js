// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  var price = 10
  areElementsOnPizza = [,false,false,false,false,false]
  $('strong').text('$' + price);
  $('.price > ul > li').hide()
  $('.green-pepper, .mushroom, .pep').hide();
  $('.btn').removeClass('active');
  $('section').removeClass('crust-gluten-free sauce-white');

  $('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('.price > ul > li:nth-child(1)').toggle();

    areElementsOnPizza[1] = !areElementsOnPizza[1]
    if (areElementsOnPizza[1])
      price++
    else 
      price--
    $('strong').text('$' + price);
  })

  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.price > ul > li:nth-child(2)').toggle();

    areElementsOnPizza[2] = !areElementsOnPizza[2]
    if (areElementsOnPizza[2])
      price++
    else 
      price--
    $('strong').text('$' + price);
  })

  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.price > ul > li:nth-child(3)').toggle();

    areElementsOnPizza[3] = !areElementsOnPizza[3]
    if (areElementsOnPizza[3])
      price++
    else 
      price--
    $('strong').text('$' + price);
  })

  $('.btn-sauce').click(function(){
    $('section > .sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.price > ul > li:nth-child(4)').toggle();

    areElementsOnPizza[4] = !areElementsOnPizza[4]
    if (areElementsOnPizza[4])
      price+=3
    else 
      price-=3
    $('strong').text('$' + price);
  })

  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.price > ul > li:nth-child(5)').toggle();

    areElementsOnPizza[5] = !areElementsOnPizza[5]
    if (areElementsOnPizza[5])
      price+=5
    else 
      price-=5
    $('strong').text('$' + price);
  })


})
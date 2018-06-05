// Write your Pizza Builder JavaScript in this file.


$(document).ready(function(){

  //Reset all the ingredients state to none initially:
  $('.pep').toggle();
  $('.mushroom').toggle();
  $('.green-pepper').toggle();
  $('.crust').toggleClass('crust-gluten-free');
  $('.sauce').toggleClass('sauce-white');




  //Buttons: adding/removing ingredients:
  $('.btn-pepperonni').on('click', function(){
    $('.pep').toggle();
    $("li:contains('$1 pepperonni')").toggle();
    
    if($('.btn-pepperonni').hasClass('active')){
      totalPrice--;
    }
    else {
      totalPrice++;
    }
    printPrice();
  })

  $('.btn-mushrooms').on('click', function(){
    $('.mushroom').toggle();
    $("li:contains('$1 mushrooms')").toggle();

    if($('.btn-mushrooms').hasClass('active')){
      totalPrice--;
    }
    else {
      totalPrice++;
    }
    printPrice();
  })

  $('.btn-green-peppers').on('click', function(){
    $('.green-pepper').toggle();
    $("li:contains('$1 green peppers')").toggle();

    if($('.btn-green-peppers').hasClass('active')){
      totalPrice--;
    }
    else {
      totalPrice++;
    }
    printPrice();
  })

  $('.btn-sauce').on('click', function(){
    $('.sauce').toggleClass('sauce-white');
    $("li:contains('$3 white sauce')").toggle();


    if($('.btn-sauce').hasClass('active')){
      totalPrice -=3;
    }
    else {
      totalPrice +=3;
    }
    printPrice();
  })



  $('.btn-crust').on('click', function(){
    $('.crust').toggleClass('crust-gluten-free');
    $("li:contains('$5 gluten-free crust')").toggle();

    if($('.btn-crust').hasClass('active')){
      totalPrice -=5;
    }
    else {
      totalPrice +=5;
    }
    printPrice();
  })



  //Adding the button active effect:
  $('.btn').toggleClass('active');


  $('.btn').on('click', function(){
    $(this).toggleClass('active')
  })

  //Reseting the ingredients list
  $('aside ul li').toggle();


  //Setting the price

  var totalPrice = 10;
  var printPrice = function(){
    $('aside strong').text(totalPrice);
  } 
  printPrice();

})


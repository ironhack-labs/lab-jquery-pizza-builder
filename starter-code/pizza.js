// Write your Pizza Builder JavaScript in this file.
$(document).on('ready', function() {
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.btn-crust').removeClass('active');
  $('.btn-sauce').removeClass('active');
  $('.price ul li:nth-child(4)').hide();
  $('.price ul li:nth-child(5)').hide();


// PEPPERONI ACTIONS
  $('.btn-pepperonni').on('click', function(){
    $('.pep').toggle();
    if($('#pizza .pep').is(':visible')){
      $('.btn-pepperonni').addClass('active');
      $('.price li:first-child').show();
    }else{
      $('.btn-pepperonni').removeClass('active');
      $('.price li:first-child').hide();
    }
    actualPricePizza();
  });

// MUSHROOMS ACTIONS
  $('.btn-mushrooms').on('click', function(){
    $('.mushroom').toggle();
    // $('.btn-mushrooms').toggleClass('active');
    if($('.btn-mushrooms').hasClass('active')){
      $('.btn-mushrooms').removeClass('active');
      $('.price li:nth-child(2)').hide();
    }else{
      $('.btn-mushrooms').addClass('active');
      $('.price li:nth-child(2)').show();
    }
    actualPricePizza();
  });

// GREEN PEPPERS ACTIONS
  $('.btn-green-peppers').on('click', function(){
    $('.green-pepper').toggle();
    if($('#pizza .green-pepper').is(":visible")){
      $('.btn-green-peppers').addClass('active');
      $('.price li:nth-child(3)').show();
    }else{
      $('.btn-green-peppers').removeClass('active');
      $('.price li:nth-child(3)').hide();
    }
    actualPricePizza();
  });

// SAUCE ACTIONS
  $('.btn-sauce').on('click', function(){
    $('.sauce').toggleClass('sauce-white');
    // $('.btn-sauce').toggleClass('active');
    if($('.btn-sauce').hasClass('active')){
      $('.btn-sauce').removeClass('active');
      $('.price li:nth-child(4)').hide();
    }else{
      $('.btn-sauce').addClass('active');
      $('.price li:nth-child(4)').show();
    }
    actualPricePizza();
  });


// CRUST ACTIONS
  $('.btn-crust').on('click', function(){
    $('.crust').toggleClass('crust-gluten-free');
    // $('.btn-crust').toggleClass('active');
    if($('.btn-crust').hasClass('active')){
      $('.btn-crust').removeClass('active');
      $('.price li:nth-child(5)').hide();
    }else{
      $('.btn-crust').addClass('active');
      $('.price li:nth-child(5)').show();
    }
    actualPricePizza();
  });
});

// PRICE FUNCTION
function actualPricePizza(){
  var pricePizza=10;
  if($('.btn-pepperonni').hasClass('active')) pricePizza += 1;
  if($('.btn-mushrooms').hasClass('active')) pricePizza += 1;
  if($('.btn-green-peppers').hasClass('active')) pricePizza += 1;
  if($('.btn-sauce').hasClass('active')) pricePizza += 3;
  if($('.btn-crust').hasClass('active')) pricePizza += 5;
  //$('.panel strong').html('$'+(pricePizza));
  $('.panel strong').text('$'+pricePizza);
}

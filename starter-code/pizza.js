// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  // On document load
  $('.crust.crust-gluten-free').removeClass('crust-gluten-free');
  $('.sauce').addClass('sauce');
  $('.sauce.sauce-white').removeClass('sauce-white');

  $('.panel.price li').hide();

  function showDefaultIngredients(){
    $('.panel.price li:nth-child(1)').show();
    $('.panel.price li:nth-child(2)').show();
    $('.panel.price li:nth-child(3)').show();
  }

  showDefaultIngredients();

  // Button clicks
  $('.btn-pepperonni').click(function() {
    $('.pep').toggle();
    //$('.panel.price li:nth-child(1)').show();
  });

  // Mushroom
  $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle();
    // $('.panel.price li:nth-child(2)').show();
   });

  // Green peppers
  $('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle('display');
    //$('.green-pepper').css('display','block');
    $('.panel.price li:nth-child(3)').show();
  });

  // Sauce
  $('.btn-sauce').click(function() {
    $('.panel.price li:nth-child(4)').show();
    $('.sauce').toggleClass('sauce sauce-white');
  });

  // Crust
  $('.btn-crust').click(function() {
    $('.crust').addClass('crust-gluten-free');
    $('.panel.price li:nth-child(5)').show();
  });

  // Active buttons
  $('.btn').removeClass('active');
  $('.btn-pepperonni').addClass('active');
  $('.btn-mushrooms').addClass('active');
  $('.btn-green-peppers').addClass('active');

  $('.btn').each(function(){
    $('.btn').click(function(){
      $(this).addClass('active');
    });
  });
});

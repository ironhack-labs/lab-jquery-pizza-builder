// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

  whitesauce();
  crust();

  function pepperonni() {
    $(this).toggleClass('active');
    $( ".pep" ).toggle();
    //$( ".price li:nth-child(1)" ).toggle();
    $( ".price li:contains('pepperonni')").toggle();
    updatePrice();
  }

  function mushrooms() {
    $(this).toggleClass('active');
    $( ".mushroom" ).toggle();
    //$( ".price li:nth-child(2)" ).toggle();
    $( ".price li:contains('mushrooms')").toggle();
    updatePrice();
  }

  function greenpeppers() {
    $(this).toggleClass('active');
    $( ".green-pepper" ).toggle();
    //$( ".price li:nth-child(3)" ).toggle();
    $( ".price li:contains('green peppers')").toggle();
    updatePrice();
  }

  function whitesauce() {
    $(this).toggleClass('active');
    $( ".sauce-white" ).toggle();
    //$( ".price li:nth-child(4)" ).toggle();
    $( ".price li:contains('white sauce')").toggle();
    updatePrice();
  }

  function crust() {
    $(this).toggleClass('active');
    $( ".crust-gluten-free" ).toggle();
    //$( ".price li:nth-child(5)" ).toggle();
    $( ".price li:contains('gluten-free crust')").toggle();
    updatePrice();
  }



  $(".btn-pepperonni").on('click', pepperonni);
  $(".btn-mushrooms").on('click', mushrooms);
  $(".btn-green-peppers").on('click', greenpeppers);
  $(".btn-sauce").on('click', whitesauce);
  $(".btn-crust").on('click', crust);

  function updatePrice() {
    var currentPrice = 10;
    $( ".price span:visible" ).each(function() {
      currentPrice += parseInt($(this).text()) || 0;
    });
    $( ".price strong" ).text('$' + currentPrice);
  }


});

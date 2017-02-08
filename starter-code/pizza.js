// Write your Pizza Builder JavaScript in this file.

//On document load
$(document).ready(function(){

  //Variable created for base price of pizza.
  var pizzaBasePrice = 10;

  //Sauce is pre-initialized to normal red sauce;
  $('.sauce').removeClass('sauce-white');
  //Crust is pre-initialized to regular crust
  $('.crust').removeClass('crust-gluten-free');

  //Removes the class active from all buttons.
  $('.active').removeClass('active');

  //Hides the pepperoni elements from the pizza.
  $('.pep').hide();

  //Hides the mushroom elements from the pizza.
  $('.mushroom').hide();

  //Hides the green pepper elements from the pizza.
  $('.green-pepper').hide();

  //Hides the extra ingredients from the price list.
  $('.price > ul').children().hide();

  //Click event handler for btn-pepperonni
  $('.btn-pepperonni').click(function(e){
    //Fills pizza with pepperoni
    $('.pep').toggle(500);
    //Toggles the 'active' class on or off.
    //If class does not exist, it will be created and then switched on and off.
    $(this).toggleClass('active');

    //Checks to see if button presses is active.
    //If true, base price of pizza is incremented.
    //If false, price of pizza decreases.
    if ($(this).hasClass('active')){
      pizzaBasePrice += 1;
      $('strong').html("$" + pizzaBasePrice);
    }
    else{
      pizzaBasePrice -= 1;
      $('strong').html('$' + pizzaBasePrice);
    }
    //Displays added ingredient in the price list.
    $('.price > ul > li:nth-child(1)').toggle();
  });

  //Click Event handler for btn-mushrooms
  $('.btn-mushrooms').click(function(e){
    $('.mushroom').toggle(500);
    $(this).toggleClass('active');

    if ($(this).hasClass('active')){
      pizzaBasePrice += 1;
      $('strong').html('$' + pizzaBasePrice);
    }
    else{
      pizzaBasePrice -= 1;
      $('strong').html('$' + pizzaBasePrice);
    }

    $('.price > ul > li:nth-child(2)').toggle();
  });

  //Click Event handler for btn-mushrooms
  $('.btn-green-peppers').click(function(e){
    $('.green-pepper').toggle(500);
    $(this).toggleClass('active');

    if ($(this).hasClass('active')){
      pizzaBasePrice += 1;
      $('strong').html('$' + pizzaBasePrice);
    }
    else {
      pizzaBasePrice -= 1;
      $('strong').html('$' + pizzaBasePrice);
    }

    $('.price > ul > li:nth-child(3)').toggle();
  });

  //Click event handler for btn-sauce
  $('.btn-sauce').click(function(e){
    $('.sauce').toggleClass('sauce-white');
    $(this).toggleClass('active');

    if ($(this).hasClass('active')){
      pizzaBasePrice += 3;
      $('strong').html('$' + pizzaBasePrice);
    }
    else {
      pizzaBasePrice -= 3;
      $('strong').html('$' + pizzaBasePrice);
    }

    $('.price > ul > li:nth-child(4)').toggle();
  });

  //Click event handler for btn-crust
  $('.btn-crust').click(function(e){
    $('.crust').toggleClass('crust-gluten-free');
    $(this).toggleClass('active');

    if ($(this).hasClass('active')){
      pizzaBasePrice += 5;
      $('strong').html('$' + pizzaBasePrice);
    }
    else {
      pizzaBasePrice -= 5;
      $('strong').html('$' + pizzaBasePrice);
    }

    $('.price > ul > li:nth-child(5)').toggle();
  });
});

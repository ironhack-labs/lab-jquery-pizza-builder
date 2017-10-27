$(document).ready(function() {
    var totalCost = 10;
    var priceNumber = $('strong').empty();
    priceNumber.append('$' + totalCost);
    
    var roniCost = 1;
    var greenCost = 1;
    var mushroomCost = 1;
    var crustCost = 5;
    var sauceCost = 3;

    var roniButton = $('.btn-pepperonni');
    var myRoni = $('.pep');
    var roniPrice = $('.price li:first-child');

    roniButton.removeClass('active');
    myRoni.hide();
    roniPrice.hide();

    roniButton.click(function(){
      myRoni.fadeToggle();
      roniButton.toggleClass('active');
      roniPrice.toggle();

      if (roniButton.hasClass('active')) {
          totalCost += roniCost;
          priceNumber.empty();
      }
      else {
          totalCost -= roniCost;
          priceNumber.empty();
      }
      priceNumber.append('$' + totalCost);
  });

    var mushroomButton = $('.btn-mushrooms');
    var myMushroom = $('.mushroom');
    var mushroomPrice = $('.price li:nth-child(2)');

    mushroomButton.removeClass('active');
    myMushroom.hide();
    mushroomPrice.hide();

    mushroomButton.click(function(){
      myMushroom.fadeToggle();
      mushroomButton.toggleClass('active');
      mushroomPrice.toggle();

      if (mushroomButton.hasClass('active')) {
          totalCost += mushroomCost;
          priceNumber.empty();
      }
      else {
          totalCost -= mushroomCost;
          priceNumber.empty();
      }
      priceNumber.append('$' + totalCost);
    });

    var greenButton = $('.btn-green-peppers');
    var greenPeppers = $('.green-pepper');
    var greenPrice = $('.price li:nth-child(3)');

    greenButton.removeClass('active');
    greenPeppers.hide();
    greenPrice.hide();

    greenButton.click(function(){
      greenPeppers.fadeToggle();
      greenButton.toggleClass('active');
      greenPrice.toggle();

      if (greenButton.hasClass('active')) {
          totalCost += greenCost;
          priceNumber.empty();
      }
      else {
          totalCost -= greenCost;
          priceNumber.empty();
      }
      priceNumber.append('$' + totalCost);
    });

    var mySauce = $('.sauce');
    var sauceButton = $('.btn-sauce');
    var saucePrice = $('.price li:nth-child(4)');

    mySauce.removeClass('sauce-white');
    sauceButton.removeClass('active');
    saucePrice.hide();

    sauceButton.click(function(){
      mySauce.toggleClass('sauce-white');
      sauceButton.toggleClass('active');
      saucePrice.toggle();

      if (sauceButton.hasClass('active')) {
          totalCost += sauceCost;
          priceNumber.empty();
      }
      else {
          totalCost -= sauceCost;
          priceNumber.empty();
      }
      priceNumber.append('$' + totalCost);
    });

    var myCrust = $('.crust');
    var crustButton = $('.btn-crust');
    var crustPrice = $('.price li:nth-child(5)');

    myCrust.removeClass('crust-gluten-free');
    crustButton.removeClass('active');
    crustPrice.hide();

    crustButton.click(function(){
      myCrust.toggleClass('crust-gluten-free');
      crustButton.toggleClass('active');
      crustPrice.toggle();

      if (crustButton.hasClass('active')) {
          totalCost += crustCost;
          priceNumber.empty();
      }
      else {
          totalCost -= crustCost;
          priceNumber.empty();
      }
      priceNumber.append('$' + totalCost);
    });
});

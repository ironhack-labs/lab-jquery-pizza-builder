$(document).ready(function() {
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
    });
});

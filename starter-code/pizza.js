$(document).ready(function() {
    var roniButton = $('.btn-pepperonni');
    var myRoni = $('.pep');
    roniButton.removeClass('active');
    myRoni.removeClass('active');
    myRoni.hide();
    roniButton.click(function(){
      myRoni.fadeToggle();
      roniButton.toggleClass('active');
    });

    var mushroomButton = $('.btn-mushrooms');
    var myMushroom = $('.mushroom');
    mushroomButton.removeClass('active');
    myMushroom.hide();
    mushroomButton.click(function(){
      myMushroom.fadeToggle();
      mushroomButton.toggleClass('active');
    });
    
    var greenButton = $('.btn-green-peppers');
    var greenPeppers = $('.green-pepper');
    greenButton.removeClass('active');
    greenPeppers.hide();
    greenButton.click(function(){
      greenPeppers.fadeToggle();
      greenButton.toggleClass('active');
    });
});


$(document).ready(function() {
    var mySauce = $('.sauce');
    var sauceBtn = $('.btn-sauce');
    var myCrust = $('.crust');
    var crustBtn = $('.btn-crust');
    mySauce.removeClass('sauce-white');
    sauceBtn.removeClass('active');
    myCrust.removeClass('crust-gluten-free');
    crustBtn.removeClass('active');

    sauceBtn.click(function() {
      sauceBtn.toggleClass('active');
      mySauce.toggleClass('sauce-white');
    });

    crustBtn.click(function() {
      crustBtn.toggleClass('active');
      myCrust.toggleClass('crust-gluten-free');
    });
  });


$(document).ready(function() {
    $('.btn-pepperonni').click(function() {
        $('.pep').slideToggle(3000);
    });
    $('.btn-mushrooms').click(function() {
        $('.mushroom').slideToggle(3000);
    });
    $('.btn-green-peppers').click(function() {
        $('.green-pepper').slideToggle(3000);
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

// Write your Pizza Builder JavaScript in this file.

$(function () {

  var pepIsActive = null;
  var musIsActive = null;
  var greIsActive = null;
  var cruIsActive = null;
  var sauIsActive = null;
  

  function stateList(){
    var sum = 10;
    var pep = 1;
    var mus = 1;
    var gre = 1;
    var sau = 3;
    var cru = 5;


    if($('.btn-pepperonni').hasClass('active')){
      $('.pep-li').show();
      sum = sum + pep;
    }else{
      $('.pep-li').hide();   

    }

    if($('.btn-mushrooms').hasClass('active')){
      $('.mus-li').show();
      sum = sum + mus;
    }else{
      $('.mus-li').hide();
    }

    if($('.btn-green-peppers').hasClass('active')){
      $('.gre-li').show();
      sum = sum + gre;
    }else{
      $('.gre-li').hide();
    }

    if($('.btn-sauce').hasClass('active')){
      $('.sau-li').show();
      sum = sum + sau;
    }else{
      $('.sau-li').hide();
    }

    if($('.btn-crust').hasClass('active')){
      $('.cru-li').show();
      sum = sum + cru;
    }else{
      $('.cru-li').hide();
    }
    document.querySelector('.sum-total').innerHTML = sum;
  }

   
  stateList();


  $('.btn-pepperonni').click(function () {


    if (pepIsActive) {
      $('.pep').toggle();
      $('.btn-pepperonni').addClass('active');
      $('.pep-li').show();

      pepIsActive = false;
    } else {
      $('.pep').toggle();
      $('.btn-pepperonni').removeClass('active');
      pepIsActive = true;
      $('.pep-li').hide();
    }

    stateList();
  });

  $('.btn-mushrooms').click(function () {

    if (musIsActive) {
      $('.mushroom').toggle();
      $('.btn-mushrooms').addClass('active');
      $('.mus-li').show();
      musIsActive = false;
    } else {
      $('.mushroom').toggle();
      $('.btn-mushrooms').removeClass('active');
      $('.mus-li').hide();
      musIsActive = true;
    }
    stateList();
  });

  $('.btn-green-peppers').click(function () {

    if (greIsActive) {
      $('.green-pepper').toggle();
      $('.btn-green-peppers').addClass('active');
      $('.gre-li').show();
      greIsActive = false;
    } else {
      $('.green-pepper').toggle();
      $('.btn-green-peppers').removeClass('active');
      $('.gre-li').hide();
      greIsActive = true;
    }
    stateList();
  });

  $('.btn-crust').click(function () {

    if (cruIsActive) {

      $('.crust').toggleClass('crust-gluten-free');
      $('.btn-crust').removeClass('active');
      $('.cru-li').hide();
      cruIsActive = false;
    } else {

      $('.crust').toggleClass('crust-gluten-free');
      $('.btn-crust').addClass('active');
      $('.cru-li').show();
      cruIsActive = true;
    }
    stateList();
  });

  $('.btn-sauce').click(function () {

    if (sauIsActive) {

      $('.sauce').toggleClass('sauce-white');
      $('.btn-sauce').removeClass('active');
      $('.sau-li').hide();
      sauIsActive = false;

    } else {
      $('.sauce').toggleClass('sauce-white');
      $('.btn-sauce').addClass('active');
      $('.sau-li').show();
      sauIsActive = true;
    }
    stateList();
  });

})
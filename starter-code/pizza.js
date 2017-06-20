$(function() {

  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.price li').slice(-2).hide();
  changePrice();

  $('.btn-pepperonni').click(function(){

    $('.pep').toggle();

    if ($('.pep').css('display') !== 'none') {

      $('.btn-pepperonni').addClass('active');
      $("li:contains('pepperonni')").css('display', 'block');

    } else {
      $('.btn-pepperonni').removeClass('active');
      $("li:contains('pepperonni')").css('display', 'none');
    }

    changePrice();

  });

  $('.btn-mushrooms').click(function(){

    $('.mushroom').toggle();

    if ($('.mushroom').css('display') !== 'none') {
      $('.btn-mushrooms').addClass('active');
      $("li:contains('mushrooms')").css('display', 'block');
    } else {
      $('.btn-mushrooms').removeClass('active');
      $("li:contains('mushrooms')").css('display', 'none');
    }

    changePrice();

  });

  $('.btn-green-peppers').click(function(){

    $('.green-pepper').toggle();

    if ($('.green-pepper').css('display') !== 'none') {
      $('.btn-green-peppers').addClass('active');
      $("li:contains('green pepper')").css('display', 'block');
    } else {
      $('.btn-green-peppers').removeClass('active');
      $("li:contains('green pepper')").css('display', 'none');
    }

    changePrice();
  });

  $('.btn-crust').click(function() {

    if ($('.crust').hasClass('crust-gluten-free')) {
      $('.crust').removeClass('crust-gluten-free');
      $("li:contains('gluten')").css('display', 'none');
    } else {
      $('.crust').addClass('crust-gluten-free');
      $("li:contains('gluten')").css('display', 'block');
    }

    changePrice();
  });

  $('.btn-sauce').click(function(){

    if ($('.sauce').hasClass('sauce-white')) {
      $('.sauce').removeClass('sauce-white');
      $("li:contains('white')").css('display', 'none');
    } else {
      $('.sauce').addClass('sauce-white');
      $("li:contains('white')").css('display', 'block');
    }

    changePrice();
  });

  function changePrice() {

    var totalSum = 10; //Because we know the pizza costs min 10eur

    $(".price li").each(function(){
      if($(this).css('display') !== 'none') {
        totalSum += parseFloat(this.innerHTML.slice(1,2));
      }
    });

    $('.price strong').html('$' + totalSum);
  }

});

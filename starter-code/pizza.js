$(document).ready(function() {

  var basePrice = 13;
    $('strong').html('$' + basePrice);

  $('.btn-pepperonni').click(function(){
    $(this).toggleClass('active');
    $('.pep').toggle('true');
    $('.panel.price li:nth-child(1)').toggle('false');
    if ($('.btn-pepperonni').hasClass('active'))
    { basePrice += 1;
      $('strong').html('$' + basePrice);
    } else {
      basePrice -=1;
      $('strong').html('$' + basePrice);}
  });

  $('.btn-mushrooms').click(function(){
    $(this).toggleClass('active');
    $('.mushroom').toggle('true');
    $('.panel.price li:nth-child(2)').toggle('false');
if ($('.btn-mushrooms').hasClass('active'))
    { basePrice += 1;
      $('strong').html('$' + basePrice);
    } else {
      basePrice -=1;
      $('strong').html('$' + basePrice);
    }
  });

  $('.btn-green-peppers').click(function(){
    $(this).toggleClass('active');
    $('.green-pepper').toggle('true');
    $('.panel.price li:nth-child(3)').toggle('false');
    if ($('.btn-green-peppers').hasClass('active'))
    { basePrice += 1;
      $('strong').html('$' + basePrice);
    } else {
      basePrice -=1;
      $('strong').html('$' + basePrice);
    }});

  $('.sauce').removeClass('sauce-white');
  $('.btn-sauce').toggleClass('active');

  $('.crust-gluten-free').removeClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');

  $('.btn-sauce').click(function(){
    $(this).toggleClass('active');
    $('.panel.price li:nth-child(4)').toggle('true');
    $('.sauce').toggleClass('sauce-white');
    if ($('.btn-sauce').hasClass('active'))
    { basePrice += 3;
      $('strong').html('$' + basePrice);
    } else {
      basePrice -=3;
      $('strong').html('$' + basePrice);
    }});

  $('.panel.price li:nth-child(4)').toggle('false');
  $('.panel.price li:nth-child(5)').toggle('false');

  $('.btn-crust').click(function(){
    $(this).toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $('.panel.price li:nth-child(5)').toggle('true');
    if ($('.btn-crust').hasClass('active'))
    { basePrice += 5;
      $('strong').html('$' + basePrice);
    } else {
      basePrice -=5;
      $('strong').html('$' + basePrice);
    }
    });

});

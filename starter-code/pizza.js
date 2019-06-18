$(document).ready(function() {
  
  $('.btn-sauce').toggleClass('active');
  $('.btn-crust').toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
  $("li:contains('white sauce')").hide();
  $('.crust').toggleClass('crust-gluten-free');
  $("li:contains('gluten-free crust')").hide();
  priceTotal();

  $('.btn-pepperonni').click(function(e) {
    $(this).toggleClass('active');
    $('.pep').toggle();
    $("li:contains('pepperonni')").toggle();
    priceTotal();
  });

  $('.btn-mushrooms').click(function(e) {
    $(this).toggleClass('active');
    $('.mushroom').toggle();
    $("li:contains('mushrooms')").toggle();
    priceTotal();
  });

  $('.btn-green-peppers').click(function(e) {
    $(this).toggleClass('active');
    $('.green-pepper').toggle();
    $("li:contains('green peppers')").toggle();
    priceTotal();
  });

  $('.btn-crust').click(function(e) {
    $(this).toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $("li:contains('gluten-free crust')").toggle();
    priceTotal();
  });

  $('.btn-sauce').click(function(e) {
    $(this).toggleClass('active');
    $('.sauce').toggle('sauce-white');
    $("li:contains('white sauce')").toggle();
    priceTotal();
  });



  function priceTotal() {
    
    let price = 10;
    if ($('.panel.price>ul>li:visible:contains(pepperonni)').length >0) {
      price += 1;
    }
    if ($('.panel.price>ul>li:visible:contains(mushrooms)').length >0) {
      price += 1;
    }
    if ($('.panel.price>ul>li:visible:contains(green)').length >0) {
      price += 1;
    }
    if ($('.panel.price>ul>li:visible:contains(white)').length >0) {
      price += 3;
    }
    if ($('.panel.price>ul>li:visible:contains(gluten)').length >0) {
      price += 5;
    }
    $('#price').text('$'+ price); 
  }
  
});




  

  



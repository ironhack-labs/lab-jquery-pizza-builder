// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $('.btn-pepperonni').click(function() {
    // Pepperoni
    $(this).toggleClass('active');
    $('.pep').toggle(200);
    $('aside>ul>li:nth-child(1)').toggle();
    totalBalance();
  });
  // Green Peppers
  $('.btn-green-peppers').click(function() {
    // Pepperoni
    $(this).toggleClass('active');
    $('.green-pepper').toggle(200);
    $('aside>ul>li:nth-child(3)').toggle();
    totalBalance();
  });
  //Mushrooms
  $('.btn-mushrooms').click(function() {
    // Pepperoni
    $(this).toggleClass('active');
    $('.mushroom').toggle(200);
    $('aside>ul>li:nth-child(2)').toggle();
    totalBalance();
  });

  $('.btn-crust').click(function() {
    // $('section').removeClass('.crust-gluten-free');
    $(this).toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $('aside>ul>li:nth-child(5)').toggle();
    totalBalance();
  });

  $('.btn-sauce').click(function() {
    $(this).toggleClass('active');
    $('.sauce').toggleClass('sauce-white');
    $('aside>ul>li:nth-child(4)').toggle();
    totalBalance();
  });

  $('.crust').toggleClass('crust-gluten-free');
  $('.sauce').toggleClass('sauce-white');
  $('aside>ul>li:nth-child(5)').toggle();
  $('aside>ul>li:nth-child(4)').toggle();

  $('.btn-sauce').toggleClass('active');
  $('.btn-crust').toggleClass('active');

  function totalBalance() {
    let price = 10;

    if ($('.btn-sauce').hasClass('active')) {
      $('#currentPrice').html((price += 3));
    }
    if ($('.btn-pepperonni').hasClass('active')) {
      $('#currentPrice')
        .html((price += 1))
        .prepend('$');
    }
    if ($('.btn-mushrooms').hasClass('active')) {
      $('#currentPrice')
        .html((price += 1))
        .prepend('$');
    }
    if ($('.btn-green-peppers').hasClass('active')) {
      $('#currentPrice')
        .html((price += 1))
        .prepend('$');
    }
    if ($('.btn-crust').hasClass('active')) {
      $('#currentPrice')
        .html((price += 5))
        .prepend('$');
    }
  }
});
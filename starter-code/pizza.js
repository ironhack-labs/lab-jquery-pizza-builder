// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  getTotal();

  $('.btn-pepperonni').click(function() {
    $(this).toggleClass('active');
    $('.pep').toggleClass('hidden');
    $('.item-price:eq(0)').toggleClass('display');
    getTotal();
  });

  $('.btn-mushrooms').click(function() {
    $(this).toggleClass('active');
    $('.mushroom').toggleClass('hidden');
    $('.item-price:eq(1)').toggleClass('display');
    getTotal();
  });

  $('.btn-green-peppers').click(function() {
    $(this).toggleClass('active');
    $('.green-pepper').toggleClass('hidden');
    $('.item-price:eq(2)').toggleClass('display');
    getTotal();
  });

  $('.btn-sauce').click(function() {
    $(this).toggleClass('active');
    $('.sauce').toggleClass('sauce-white');
    $('.item-price:eq(3)').toggleClass('display');
    getTotal();
  });

  $('.btn-crust').click(function() {
    $(this).toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $('.item-price:eq(4)').toggleClass('display');
    getTotal();
  });
  
  function getTotal() {
    let total = 10;
    $('.item-price').each(function() {
      if (!$(this).hasClass('display')) {
        total += parseFloat($(this).text()[1]);
      }
      return total;
    });
    return $('#total').html('$' + total);
  };
});
